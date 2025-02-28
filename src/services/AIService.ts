import type { AIAnalysis } from './types';

export interface AIService {
    /**
     * Analyse des données avec l'IA
     * @param data Les données à analyser
     * @returns Liste des analyses générées
     */
    analyzeData(data: unknown): Promise<AIAnalysis[]>;

    /**
     * Génère des recommandations basées sur le contexte fourni
     * @param context Le contexte pour la génération des recommandations
     * @returns Liste des recommandations sous forme d'analyses
     */
    generateRecommendations(context: Record<string, unknown>): Promise<AIAnalysis[]>;

    /**
     * Traite une requête utilisateur en langage naturel
     * @param query La requête de l'utilisateur
     * @returns La réponse générée
     */
    processUserQuery(query: string): Promise<string>;

    /**
     * Entraîne le modèle d'IA avec de nouvelles données
     * @param trainingData Les données d'entraînement
     */
    trainModel(trainingData: unknown): Promise<void>;

    /**
     * Récupère des insights spécifiques
     * @param type Le type d'analyse souhaité
     * @param timeframe Période optionnelle pour filtrer les résultats
     * @returns Liste des insights trouvés
     */
    getInsights(
        type: AIAnalysis['type'],
        timeframe?: { start: Date; end: Date }
    ): Promise<AIAnalysis[]>;
} 