import { SettingsSection } from '../types';

export const initialSettings: SettingsSection[] = [
  {
    title: 'Profil',
    fields: [
      { label: 'Nom', value: 'Jean Martin' },
      { label: 'Email', value: 'jean.martin@email.com' },
      { label: 'Téléphone', value: '06 12 34 56 78' }
    ]
  },
  {
    title: 'Entreprise',
    fields: [
      { label: 'Nom de l\'entreprise', value: 'Martin Consulting' },
      { label: 'SIRET', value: '123 456 789 00012' },
      { label: 'Adresse', value: 'Paris, France' }
    ]
  }
];