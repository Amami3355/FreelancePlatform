import type { Reminder } from './types';

export interface ReminderService {
    /**
     * Crée un nouveau rappel
     * @param reminder Les données du rappel sans l'ID
     * @returns Le rappel créé avec son ID
     */
    createReminder(reminder: Omit<Reminder, 'id'>): Promise<Reminder>;

    /**
     * Met à jour un rappel existant
     * @param id L'identifiant du rappel
     * @param reminder Les champs à mettre à jour
     * @returns Le rappel mis à jour
     */
    updateReminder(id: string, reminder: Partial<Reminder>): Promise<Reminder>;

    /**
     * Supprime un rappel
     * @param id L'identifiant du rappel à supprimer
     */
    deleteReminder(id: string): Promise<void>;

    /**
     * Récupère un rappel spécifique
     * @param id L'identifiant du rappel
     * @returns Le rappel demandé
     */
    getReminder(id: string): Promise<Reminder>;

    /**
     * Liste les rappels selon les filtres spécifiés
     * @param filters Critères de filtrage optionnels (statut, priorité, dates)
     * @returns Liste des rappels correspondant aux critères
     */
    listReminders(filters?: {
        status?: Reminder['status'];
        priority?: Reminder['priority'];
        startDate?: Date;
        endDate?: Date;
    }): Promise<Reminder[]>;

    /**
     * Marque un rappel comme terminé
     * @param id L'identifiant du rappel
     * @returns Le rappel mis à jour
     */
    markAsCompleted(id: string): Promise<Reminder>;
} 