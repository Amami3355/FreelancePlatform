import type { AccountingEntry } from './types';

export interface AccountingService {
    /**
     * Enregistre une nouvelle transaction comptable
     * @param entry Les données de la transaction sans l'ID
     * @returns La transaction créée avec son ID
     */
    recordTransaction(entry: Omit<AccountingEntry, 'id'>): Promise<AccountingEntry>;

    /**
     * Met à jour une transaction existante
     * @param id L'identifiant de la transaction
     * @param entry Les champs à mettre à jour
     * @returns La transaction mise à jour
     */
    updateTransaction(id: string, entry: Partial<AccountingEntry>): Promise<AccountingEntry>;

    /**
     * Supprime une transaction
     * @param id L'identifiant de la transaction à supprimer
     */
    deleteTransaction(id: string): Promise<void>;

    /**
     * Récupère une transaction spécifique
     * @param id L'identifiant de la transaction
     * @returns La transaction demandée
     */
    getTransaction(id: string): Promise<AccountingEntry>;

    /**
     * Récupère une liste de transactions selon les filtres spécifiés
     * @param filters Critères de filtrage optionnels (dates, type, catégorie)
     * @returns Liste des transactions correspondant aux critères
     */
    getTransactions(filters?: {
        startDate?: Date;
        endDate?: Date;
        type?: AccountingEntry['type'];
        category?: string;
    }): Promise<AccountingEntry[]>;

    /**
     * Génère un rapport comptable
     * @param type Le type de rapport (revenus, dépenses ou profits/pertes)
     * @param period La période concernée
     * @returns Les données du rapport
     */
    generateReport(
        type: 'income' | 'expense' | 'profit-loss',
        period: { start: Date; end: Date }
    ): Promise<unknown>;


    /**
     * Exporte les données vers un logiciel de comptabilité tiers
     * @param software Le logiciel cible (QuickBooks, Sage ou Exact)
     */
    exportToSoftware(software: 'quickbooks' | 'sage' | 'exact'): Promise<void>;




    // syncTransactions(): Promise<void>;
    // categorizeExpense(expense: AccountingEntry): Promise<string>;
    // generateTaxReport(year: number): Promise<unknown>;
} 