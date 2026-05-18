# Église Évangélique Baptiste de Massy — Nouveau site

Site officiel — **Astro 4.x + Tailwind v3 + TypeScript strict**.

> **Objectif** : remplacer l'ancien site WordPress (eglise-massy.fr) par un site moderne, rapide, sécurisé et facilement maintenable.

---

## ⚡ Démarrage rapide

```bash
# 1. Installation
npm install

# 2. Variables d'environnement
cp .env.example .env.local
# → éditer .env.local et y mettre tes vraies clés

# 3. Dev server
npm run dev
# → http://localhost:4321

# 4. Build production
npm run build

# 5. Preview du build
npm run preview
```

---

## 🏛 Architecture "octopus"

Chaque domaine de données vit dans son propre module — **indépendant et remplaçable** :

```
src/data/
├── church.ts       # Infos institutionnelles (adresse, horaires, identité)
├── sermons.ts      # Prédications (YouTube + métadonnées)
├── activities.ts   # Activités hebdomadaires
├── groups.ts       # Groupes de quartier
└── events.ts       # Événements ponctuels
```

**Principe** : chaque fichier exporte ses données + ses helpers. Quand tu branches Supabase, tu remplaces **un seul fichier** sans toucher au reste du site.

### Exemple : brancher les sermons à Supabase

1. Créer la table dans Supabase :
   ```sql
   CREATE TABLE sermons (
     id text PRIMARY KEY,
     youtube_id text NOT NULL,
     title text NOT NULL,
     speaker text NOT NULL,
     date date NOT NULL,
     series text,
     scripture text,
     description text,
     duration_minutes integer,
     featured boolean DEFAULT false,
     created_at timestamptz DEFAULT now()
   );
   CREATE INDEX idx_sermons_date ON sermons(date DESC);
   ```

2. Remplacer le contenu de `src/data/sermons.ts` :
   ```typescript
   import { createClient } from '@supabase/supabase-js';
   const supabase = createClient(
     import.meta.env.PUBLIC_SUPABASE_URL,
     import.meta.env.PUBLIC_SUPABASE_ANON_KEY
   );

   export const sermons = await supabase
     .from('sermons')
     .select('*')
     .order('date', { ascending: false })
     .then(r => r.data ?? []);

   // Les helpers (getSermonById, getFeaturedSermon...) restent identiques
   ```

3. **Aucune autre page à modifier.**

---

## 🔒 Sécurité

### En place dès le déploiement

- **CSP stricte** (vercel.json) — bloque XSS, clickjacking, MIME sniffing
- **HSTS 2 ans + preload** — HTTPS forcé
- **Rate limiting** — 5 messages/min sur /api/contact, 3/min sur /api/prayer, 10/h sur /api/group-join, 2/min sur /api/newsletter
- **CSRF tokens** — HMAC signés, validité 2h, vérification constant-time
- **Honeypot anti-bots** — champ caché `website`
- **Zod validation** — toutes les entrées validées et typées
- **DOMPurify** — sanitization récursive avant traitement
- **Middleware Astro** — blocage user-agents suspects (nikto, sqlmap, etc.)
- **Permissions-Policy** — désactivation API browser non utilisées
- **COEP/COOP/CORP** — isolation cross-origin

### À configurer toi-même

1. **CSRF_SECRET** dans `.env.local` :
   ```bash
   openssl rand -base64 32
   ```
2. **Variables Supabase** une fois la base créée
3. **Service email** (Resend recommandé) pour les notifications

---

## 📦 Structure du projet

```
.
├── public/                  # Assets statiques
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── offline.html
├── src/
│   ├── components/          # Composants réutilisables (.astro)
│   │   ├── ActivityCard.astro
│   │   ├── Button.astro
│   │   ├── Container.astro
│   │   ├── DarkModeToggle.astro
│   │   ├── Footer.astro
│   │   ├── Logo.astro
│   │   ├── Navigation.astro
│   │   ├── SectionHeading.astro
│   │   ├── SermonCard.astro
│   │   └── YouTubeEmbed.astro
│   ├── data/                # ⭐ Modules octopus
│   │   ├── activities.ts
│   │   ├── church.ts
│   │   ├── events.ts
│   │   ├── groups.ts
│   │   └── sermons.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── lib/                 # Utilitaires
│   │   ├── schemas.ts       # Zod schemas
│   │   └── security.ts      # Rate limit, CSRF, sanitization, CORS
│   ├── middleware.ts        # Astro middleware (sécurité)
│   ├── pages/
│   │   ├── api/
│   │   │   ├── contact.ts
│   │   │   ├── csrf.ts
│   │   │   ├── group-join.ts
│   │   │   ├── newsletter.ts
│   │   │   └── prayer.ts
│   │   ├── groupes/
│   │   │   └── index.astro
│   │   ├── sermons/
│   │   │   ├── [id].astro   # Détail
│   │   │   └── index.astro  # Liste
│   │   ├── 404.astro
│   │   ├── activites.astro
│   │   ├── contact.astro
│   │   ├── index.astro      # Homepage
│   │   └── notre-adn.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
└── vercel.json
```

---

## 🎨 Design System

Inspiré du parc de cèdres autour du bâtiment — palette chaleureuse et naturelle :

| Token | Usage |
|---|---|
| **Terracotta** | Accent principal, CTA, liens (`#c44d2a`) |
| **Sage** (vert sauge) | Accent secondaire, succès, identité « Cèdres » |
| **Sand** (sable) | Fonds, papier, neutres chauds |
| **Ink** | Texte principal — chaud, jamais pur noir |

Typographie : **Fraunces** (display, serif moderne) + **Inter** (corps, sans-serif).

Toutes les couleurs en classes Tailwind : `bg-terracotta-600`, `text-sage-700`, `border-sand-200`, `text-ink-900`...

Dark mode : automatique (système) ou manuel (localStorage `eeb-theme`).

---

## 🚀 Déploiement Vercel

1. **Push** le repo sur GitHub
2. Connecter le repo dans Vercel (auto-détection Astro)
3. Dans **Settings → Environment Variables**, ajouter :
   - `CSRF_SECRET` (obligatoire)
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `EMAIL_API_KEY`
4. **Deploy**

Le `vercel.json` est déjà configuré pour :
- Headers de sécurité (CSP, HSTS, etc.)
- Cache long sur assets statiques (1 an)
- No-cache sur /api
- Redirections de l'ancien WordPress (`/predications-2` → `/sermons`)

### Domaine personnalisé

Vercel → Settings → Domains → Add `eglise-massy.fr` et `www.eglise-massy.fr`.
Update DNS chez ton registrar :
- `A` record : pointer vers les IP Vercel
- `CNAME www` : `cname.vercel-dns.com`

---

## ♿ Accessibilité

- **Sémantique HTML** : `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- **Skip-link** « Aller au contenu principal »
- **Focus visible** sur tous les éléments interactifs (ring terracotta)
- **ARIA** : `aria-label`, `aria-current`, `aria-expanded`, `aria-hidden`, `role`
- **Contraste WCAG AA** : tous les couples couleur testés
- **`prefers-reduced-motion`** : animations désactivées si demandé
- **Touch targets** ≥ 44×44 px
- **Lang** `fr` sur `<html>`, lecteurs d'écran en français
- **Form labels** explicites pour chaque champ
- **Honeypot** marqué `aria-hidden`, `tabindex=-1`

---

## 🧪 Checklist qualité avant mise en prod

- [ ] `npm run build` passe sans erreur
- [ ] `CSRF_SECRET` défini en variables Vercel (32+ chars)
- [ ] Supabase branché (au moins `sermons`, `groups`)
- [ ] Service email branché (Resend / SendGrid)
- [ ] Domaine et HTTPS actifs sur Vercel
- [ ] Soumission au Google Search Console
- [ ] Sitemap accessible : `https://eglise-massy.fr/sitemap-index.xml`
- [ ] Test mobile sur vrai appareil
- [ ] Lighthouse audit : 95+/100 toutes catégories
- [ ] Test des formulaires (contact, groupes) avec un vrai mail

---

## 📞 Contact

Site bâti pour l'**Église Évangélique Baptiste de Massy**.
17 voie de Wissous, 91300 Massy · 01 69 30 54 27

Affiliations : **FEEBF · CNEF · FPF · Parcours Alpha**.
