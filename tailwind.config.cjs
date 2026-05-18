/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ============================================================
      // PALETTE "LES CÈDRES" — Contemporaine, chaleureuse, naturelle
      // Hommage au parc de cèdres du Centre Évangélique
      // ============================================================
      colors: {
        // Sable — couleur principale de fond, papier ancien réchauffé
        sand: {
          50: '#fdfbf6',
          100: '#faf6ec',
          200: '#f3ecd7',
          300: '#e8dcb8',
          400: '#d9c690',
          500: '#c5ac6c',
          600: '#a88c52',
          700: '#866d40',
          800: '#5e4c2d',
          900: '#3d3220',
          950: '#211b11',
        },
        // Terracotta — accent chaleureux, terre cuite méditerranéenne
        terracotta: {
          50: '#fdf6f3',
          100: '#fbe9e0',
          200: '#f6d1bf',
          300: '#efb094',
          400: '#e5876a',
          500: '#d96944',
          600: '#c44d2a',
          700: '#a23c22',
          800: '#823322',
          900: '#6a2d20',
          950: '#3a160e',
        },
        // Sauge (Cèdres) — vert apaisant, branches de cèdres
        sage: {
          50: '#f4f7f3',
          100: '#e6ede3',
          200: '#cdd9c7',
          300: '#a7bda1',
          400: '#7e9c79',
          500: '#5d7f58',
          600: '#476645',
          700: '#3a5239',
          800: '#304230',
          900: '#283729',
          950: '#141d14',
        },
        // Encre — texte principal, profond et chaud
        ink: {
          50: '#f5f4f1',
          100: '#e8e6e0',
          200: '#cfccc1',
          300: '#aca89a',
          400: '#857f70',
          500: '#6b6457',
          600: '#564f44',
          700: '#403b32',
          800: '#2a2620',
          900: '#1a1612',
          950: '#0d0a07',
        },
      },
      // ============================================================
      // TYPOGRAPHIE — Serif pour les titres (caractère), sans pour le corps
      // ============================================================
      fontFamily: {
        display: [
          '"Fraunces"',
          'ui-serif',
          'Georgia',
          '"Times New Roman"',
          'serif',
        ],
        sans: [
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          '"SF Mono"',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        // Échelle modulaire ratio 1.250 (Major Third)
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.7' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
      },
      // ============================================================
      // ESPACEMENTS — Base 8px, échelle douce
      // ============================================================
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        128: '32rem',
        144: '36rem',
      },
      // ============================================================
      // BORDURES — Radius doux, organique
      // ============================================================
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      // ============================================================
      // OMBRES — Subtiles, jamais agressives
      // ============================================================
      boxShadow: {
        'soft-sm': '0 1px 2px 0 rgb(15 15 15 / 0.04)',
        soft: '0 2px 8px -1px rgb(15 15 15 / 0.06), 0 1px 3px -1px rgb(15 15 15 / 0.04)',
        'soft-md':
          '0 4px 16px -2px rgb(15 15 15 / 0.08), 0 2px 6px -2px rgb(15 15 15 / 0.05)',
        'soft-lg':
          '0 12px 32px -8px rgb(15 15 15 / 0.12), 0 4px 12px -4px rgb(15 15 15 / 0.06)',
        'soft-xl':
          '0 24px 48px -12px rgb(15 15 15 / 0.18), 0 8px 16px -8px rgb(15 15 15 / 0.08)',
        glow: '0 0 32px -4px rgb(196 77 42 / 0.25)',
        'glow-sage': '0 0 32px -4px rgb(93 127 88 / 0.25)',
      },
      // ============================================================
      // ANIMATIONS — Apple-grade easing, jamais raides
      // ============================================================
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        250: '250ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-down': 'fadeDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      // ============================================================
      // BACKDROP — Effet Liquid Glass
      // ============================================================
      backdropBlur: {
        xs: '2px',
      },
      // ============================================================
      // CONTAINER
      // ============================================================
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
