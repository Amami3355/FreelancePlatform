import type { AnalyticsMetric } from './types';

export interface AnalyticsService {
    /**
     * Récupère une métrique spécifique
     * @param metricId L'identifiant de la métrique
     * @returns La métrique demandée
     */
    getMetric(metricId: string): Promise<AnalyticsMetric>;

    /**
     * Récupère toutes les métriques sur une période donnée
     * @param timeframe La période de temps à analyser
     * @returns Liste des métriques sur la période
     */
    getMetrics(timeframe: { start: Date; end: Date }): Promise<AnalyticsMetric[]>;

    /**
     * Enregistre un nouvel événement analytique
     * @param eventName Le nom de l'événement
     * @param data Les données associées à l'événement
     */
    trackEvent(eventName: string, data: Record<string, unknown>): Promise<void>;

    /**
     * Génère un rapport d'analyse
     * @param metrics Liste des métriques à inclure
     * @param timeframe Période à analyser
     * @returns Le rapport avec les métriques et un résumé
     */
    generateReport(
        metrics: string[],
        timeframe: { start: Date; end: Date }
    ): Promise<{
        metrics: AnalyticsMetric[];
        summary: Record<string, unknown>;
    }>;

    /**
     * Définit une métrique personnalisée
     * @param name Le nom de la métrique
     * @param calculation La fonction de calcul de la métrique
     */
    setCustomMetric(name: string, calculation: (data: unknown) => number): Promise<void>;

    // predictRevenue(months: number): Promise<{
    //   predictions: number[];
    //   confidence: number;
    // }>;

    // analyzeClientSegments(): Promise<{
    //   segments: ClientSegment[];
    //   recommendations: string[];
    // }>;

    // identifyTrends(): Promise<{
    //   growingServices: string[];
    //   seasonalPatterns: Pattern[];
    //   marketOpportunities: string[];
    // }>;
} 