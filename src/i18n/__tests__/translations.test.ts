import { expect, describe, it } from '@jest/globals';
import fr from '../locales/fr';
import en from '../locales/en';

describe('Translations', () => {
  it('should have matching keys in all languages', () => {
    const frKeys = Object.keys(fr).sort();
    const enKeys = Object.keys(en).sort();
    
    expect(frKeys).toEqual(enKeys);
  });

  it('should not have missing translations', () => {
    const checkMissingTranslations = (obj: any, path = '') => {
      Object.entries(obj).forEach(([key, value]) => {
        const currentPath = path ? `${path}.${key}` : key;
        if (typeof value === 'object') {
          checkMissingTranslations(value, currentPath);
        } else {
          expect(value).not.toBe('');
        }
      });
    };

    checkMissingTranslations(fr);
    checkMissingTranslations(en);
  });
}); 