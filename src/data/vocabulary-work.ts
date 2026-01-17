import { VocabularyWord } from '@/types';

export const workVocabulary: VocabularyWord[] = [
  // BIURO (Oficina)
  { id: 'office_001', polish: 'biuro', spanish: 'oficina', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_002', polish: 'biurko', spanish: 'escritorio', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_003', polish: 'krzesło biurowe', spanish: 'silla de oficina', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_004', polish: 'komputer', spanish: 'ordenador', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_005', polish: 'laptop', spanish: 'portátil', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_006', polish: 'klawiatura', spanish: 'teclado', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_007', polish: 'myszka', spanish: 'ratón', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_008', polish: 'monitor', spanish: 'monitor', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_009', polish: 'drukarka', spanish: 'impresora', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_010', polish: 'skaner', spanish: 'escáner', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_011', polish: 'telefon', spanish: 'teléfono', category: 'work', subcategory: 'office', difficulty: 'beginner' },
  { id: 'office_012', polish: 'faks', spanish: 'fax', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_013', polish: 'kosz na śmieci', spanish: 'papelera', category: 'work', subcategory: 'office', difficulty: 'intermediate' },
  { id: 'office_014', polish: 'szafa na akta', spanish: 'archivador', category: 'work', subcategory: 'office', difficulty: 'advanced' },
  { id: 'office_015', polish: 'tablica korkowa', spanish: 'tablón de anuncios', category: 'work', subcategory: 'office', difficulty: 'intermediate' },

  // PRACA (Actividades laborales)
  { id: 'work_act_001', polish: 'praca', spanish: 'trabajo', category: 'work', subcategory: 'work-activities', difficulty: 'beginner' },
  { id: 'work_act_002', polish: 'pracować', spanish: 'trabajar', category: 'work', subcategory: 'work-activities', difficulty: 'beginner' },
  { id: 'work_act_003', polish: 'pracownik', spanish: 'empleado', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_004', polish: 'pracodawca', spanish: 'empleador', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_005', polish: 'szef', spanish: 'jefe', category: 'work', subcategory: 'work-activities', difficulty: 'beginner' },
  { id: 'work_act_006', polish: 'kolega z pracy', spanish: 'compañero', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_007', polish: 'spotkanie', spanish: 'reunión', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_008', polish: 'prezentacja', spanish: 'presentación', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_009', polish: 'projekt', spanish: 'proyecto', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_010', polish: 'termin', spanish: 'fecha límite', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_011', polish: 'raport', spanish: 'informe', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_012', polish: 'dokument', spanish: 'documento', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_013', polish: 'umowa', spanish: 'contrato', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_014', polish: 'podpis', spanish: 'firma', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },
  { id: 'work_act_015', polish: 'urlop', spanish: 'vacaciones', category: 'work', subcategory: 'work-activities', difficulty: 'intermediate' },

  // ZAWODY (Profesiones)
  { id: 'professions_001', polish: 'lekarz', spanish: 'médico', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_002', polish: 'pielęgniarka', spanish: 'enfermera', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_003', polish: 'nauczyciel', spanish: 'profesor', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_004', polish: 'policjant', spanish: 'policía', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_005', polish: 'strażak', spanish: 'bombero', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_006', polish: 'inżynier', spanish: 'ingeniero', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_007', polish: 'architekt', spanish: 'arquitecto', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_008', polish: 'prawnik', spanish: 'abogado', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_009', polish: 'księgowy', spanish: 'contable', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_010', polish: 'programista', spanish: 'programador', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_011', polish: 'dziennikarz', spanish: 'periodista', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_012', polish: 'fotograf', spanish: 'fotógrafo', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_013', polish: 'fryzjer', spanish: 'peluquero', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_014', polish: 'kucharz', spanish: 'chef', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_015', polish: 'kelner', spanish: 'camarero', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_016', polish: 'sprzedawca', spanish: 'vendedor', category: 'work', subcategory: 'professions', difficulty: 'beginner' },
  { id: 'professions_017', polish: 'mechanik', spanish: 'mecánico', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_018', polish: 'elektryk', spanish: 'electricista', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_019', polish: 'hydraulik', spanish: 'fontanero', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },
  { id: 'professions_020', polish: 'malarz', spanish: 'pintor', category: 'work', subcategory: 'professions', difficulty: 'intermediate' },

  // FINANSE (Finanzas)
  { id: 'finance_001', polish: 'pensja', spanish: 'salario', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_002', polish: 'wynagrodzenie', spanish: 'sueldo', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_003', polish: 'premia', spanish: 'bonificación', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_004', polish: 'podwyżka', spanish: 'aumento', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_005', polish: 'podatek', spanish: 'impuesto', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_006', polish: 'ubezpieczenie', spanish: 'seguro', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_007', polish: 'emerytura', spanish: 'jubilación', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_008', polish: 'faktura', spanish: 'factura', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_009', polish: 'budżet', spanish: 'presupuesto', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },
  { id: 'finance_010', polish: 'zysk', spanish: 'beneficio', category: 'work', subcategory: 'finance', difficulty: 'intermediate' },

  // POSZUKIWANIE PRACY (Búsqueda de empleo)
  { id: 'job_search_001', polish: 'praca', spanish: 'trabajo', category: 'work', subcategory: 'job-search', difficulty: 'beginner' },
  { id: 'job_search_002', polish: 'ogłoszenie o pracę', spanish: 'oferta de trabajo', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_003', polish: 'CV', spanish: 'currículum', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_004', polish: 'list motywacyjny', spanish: 'carta de presentación', category: 'work', subcategory: 'job-search', difficulty: 'advanced' },
  { id: 'job_search_005', polish: 'rozmowa kwalifikacyjna', spanish: 'entrevista de trabajo', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_006', polish: 'kandydat', spanish: 'candidato', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_007', polish: 'doświadczenie', spanish: 'experiencia', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_008', polish: 'kwalifikacje', spanish: 'cualificaciones', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_009', polish: 'umiejętności', spanish: 'habilidades', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_010', polish: 'zatrudnić', spanish: 'contratar', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_011', polish: 'zwolnić', spanish: 'despedir', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
  { id: 'job_search_012', polish: 'awans', spanish: 'ascenso', category: 'work', subcategory: 'job-search', difficulty: 'intermediate' },
];

export async function seedWorkVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing work vocabulary IDs
    const existingWork = await db.vocabulary.where('category').equals('work').toArray();
    const existingIds = new Set(existingWork.map(w => w.id));
    
    // Update existing words with correct Spanish translations
    const wordsToUpdate = workVocabulary.filter(word => existingIds.has(word.id));
    for (const word of wordsToUpdate) {
      await db.vocabulary.update(word.id, { spanish: word.spanish });
    }
    
    // Filter out words that already exist
    const newWords = workVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new work words`);
    }
    
    // Always update total word count
    const totalCount = await db.vocabulary.where('category').equals('work').count();
    await db.categories.update('work', { totalWords: totalCount });
    console.log(`✅ Work vocabulary: ${totalCount} total words (${workVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingWork = await db.vocabulary.where('category').equals('work').toArray();
      const existingIds = new Set(existingWork.map(w => w.id));
      
      // Update existing words
      const wordsToUpdate = workVocabulary.filter(word => existingIds.has(word.id));
      for (const word of wordsToUpdate) {
        await db.vocabulary.update(word.id, { spanish: word.spanish });
      }
      
      const newWords = workVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
        } catch (e) {
          console.error('Error adding remaining work words:', e);
        }
      }
      
      // Always update total word count
      const totalCount = await db.vocabulary.where('category').equals('work').count();
      await db.categories.update('work', { totalWords: totalCount });
      console.log(`✅ Work vocabulary: ${totalCount} total words`);
      return true;
    }
    console.error('Error seeding work vocabulary:', error);
    return false;
  }
}
