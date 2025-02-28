import type { ClientPortalSettings } from './types';

export interface ClientPortalService {
    /**
     * Récupère les paramètres du portail client
     * @returns Les paramètres actuels du portail
     */
    getPortalSettings(): Promise<ClientPortalSettings>;

    /**
     * Met à jour les paramètres du portail client
     * @param settings Les paramètres à mettre à jour
     * @returns Les paramètres mis à jour
     */
    updatePortalSettings(settings: Partial<ClientPortalSettings>): Promise<ClientPortalSettings>;

    /**
     * Génère un jeton d'accès pour un client spécifique
     * @param clientId L'identifiant du client
     * @returns Le jeton d'accès généré
     */
    generateClientAccessToken(clientId: string): Promise<string>;

    /**
     * Révoque l'accès d'un client au portail
     * @param clientId L'identifiant du client
     */
    revokeClientAccess(clientId: string): Promise<void>;

    /**
     * Récupère l'historique d'activité d'un client sur le portail
     * @param clientId L'identifiant du client
     * @returns Le dernier accès et le journal d'activité
     */
    getClientPortalActivity(clientId: string): Promise<{
        lastAccess?: Date;
        activityLog: Array<{
            action: string;
            timestamp: Date;
            details?: Record<string, unknown>;
        }>;
    }>;
} 