import type { CalendarEvent } from './types';

export interface CalendarService {
    /**
     * Crée un nouvel événement dans le calendrier
     * @param event Les données de l'événement sans l'ID
     * @returns L'événement créé avec son ID
     */
    createEvent(event: Omit<CalendarEvent, 'id'>): Promise<CalendarEvent>;

    /**
     * Met à jour un événement existant
     * @param id L'identifiant de l'événement
     * @param event Les champs à mettre à jour
     * @returns L'événement mis à jour
     */
    updateEvent(id: string, event: Partial<CalendarEvent>): Promise<CalendarEvent>;

    /**
     * Supprime un événement
     * @param id L'identifiant de l'événement à supprimer
     */
    deleteEvent(id: string): Promise<void>;

    /**
     * Récupère un événement spécifique
     * @param id L'identifiant de l'événement
     * @returns L'événement demandé
     */
    getEvent(id: string): Promise<CalendarEvent>;

    /**
     * Récupère une liste d'événements selon les filtres spécifiés
     * @param filters Critères de filtrage optionnels (dates, type)
     * @returns Liste des événements correspondant aux critères
     */
    getEvents(filters?: {
        startDate?: Date;
        endDate?: Date;
        type?: CalendarEvent['type'];
    }): Promise<CalendarEvent[]>;

    /**
     * Synchronise avec un calendrier externe
     * @param provider Le fournisseur du calendrier externe
     * @param credentials Les identifiants d'authentification
     */
    syncWithExternalCalendar(
        provider: 'google' | 'outlook' | 'apple',
        credentials: Record<string, string>
    ): Promise<void>;
} 