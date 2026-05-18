/**
 * Schémas Zod centralisés.
 * Toute donnée venant du client passe par un de ces schémas.
 */

import { z } from 'zod';

// =============================================================================
// CONTACT
// =============================================================================
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Votre nom est trop court')
    .max(100, 'Votre nom est trop long')
    .regex(
      /^[\p{L}\p{M}\s\-'.]+$/u,
      'Le nom ne peut contenir que des lettres'
    ),
  email: z
    .string()
    .email('Adresse email invalide')
    .max(254, 'Email trop long'),
  phone: z
    .string()
    .max(20, 'Téléphone trop long')
    .regex(/^[\d\s+().-]*$/, 'Format de téléphone invalide')
    .optional()
    .or(z.literal('')),
  subject: z.enum(['general', 'visite', 'priere', 'pastoral', 'autre'], {
    errorMap: () => ({ message: 'Veuillez sélectionner un sujet' }),
  }),
  message: z
    .string()
    .min(10, 'Votre message doit faire au moins 10 caractères')
    .max(5000, 'Votre message est trop long (max 5000 caractères)'),
  csrfToken: z.string().min(1, 'Token CSRF manquant'),
  website: z.string().max(0, 'Spam détecté').optional().or(z.literal('')), // honeypot
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

// =============================================================================
// DEMANDE DE PRIÈRE
// =============================================================================
export const PrayerRequestSchema = z.object({
  name: z.string().max(100).optional().or(z.literal('')),
  request: z
    .string()
    .min(5, 'Votre demande doit faire au moins 5 caractères')
    .max(1000, 'Votre demande est trop longue (max 1000 caractères)'),
  isAnonymous: z.boolean().default(true),
  csrfToken: z.string().min(1),
  website: z.string().max(0).optional().or(z.literal('')),
});

export type PrayerRequest = z.infer<typeof PrayerRequestSchema>;

// =============================================================================
// INSCRIPTION GROUPE
// =============================================================================
export const GroupJoinSchema = z.object({
  groupId: z.string().min(1, 'Groupe invalide').max(64),
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z
    .string()
    .max(20)
    .regex(/^[\d\s+().-]*$/)
    .optional()
    .or(z.literal('')),
  message: z.string().max(500).optional().or(z.literal('')),
  csrfToken: z.string().min(1),
  website: z.string().max(0).optional().or(z.literal('')),
});

export type GroupJoin = z.infer<typeof GroupJoinSchema>;

// =============================================================================
// NEWSLETTER
// =============================================================================
export const NewsletterSchema = z.object({
  email: z.string().email('Adresse email invalide').max(254),
  preference: z
    .enum(['weekly', 'sunday', 'monthly'])
    .default('weekly'),
  csrfToken: z.string().min(1),
  website: z.string().max(0).optional().or(z.literal('')),
});

export type Newsletter = z.infer<typeof NewsletterSchema>;
