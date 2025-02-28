import type { DocumentTemplate } from './types';

/**
 * Interface pour le service de génération de documents
 */
export interface TemplateEngine {
  /**
   * Crée un document à partir d'un modèle
   * @param templateId L'identifiant du modèle
   * @param data Les données à injecter dans le modèle
   * @returns Le document généré
   */
  createFromTemplate(templateId: string, data: any): Document;

  /**
   * Sauvegarde un document en tant que modèle
   * @param document Le document à sauvegarder comme modèle
   * @returns Le modèle de document créé
   */
  saveAsTemplate(document: Document): DocumentTemplate;
}