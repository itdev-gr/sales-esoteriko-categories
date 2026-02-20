/**
 * Σταθερό mapping κανόνων στρατηγικής ανά τύπο επιχείρησης.
 * Χωρίς AI ή αυτόματη κατηγοριοποίηση — καθαρό object lookup.
 */

export type Strategy = {
  main: string;
  secondary: string;
  performance: string;
  avoid: string;
};

const WEB_SEO_STRATEGY: Strategy = {
  main: 'Web SEO',
  secondary: 'Local SEO (αν υπάρχει φυσική έδρα)',
  performance: 'Google Ads',
  avoid: 'Μην ξεκινήσεις μόνο με Social Media ως βασική στρατηγική.',
};

/** Ξενοδοχείο / Βίλα: 1ο Web SEO, 2ο Google Ads, χωρίς Local SEO */
const HOTEL_VILLA_STRATEGY: Strategy = {
  main: 'Web SEO',
  secondary: 'Google Ads',
  performance: 'Social Media',
  avoid: 'Μην αναφέρεις καθόλου Local SEO. Μην ξεκινήσεις μόνο με Social Media ως βασική στρατηγική.',
};

const LOCAL_SEO_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Google Ads Αναζήτησης',
  performance: 'Social Media',
  avoid: 'Μην ξεκινήσεις με Web SEO ως πρώτη κίνηση.',
};

/** Τουριστικό Γραφείο / Δικηγόρος: πρώτα Local SEO, μετά Web SEO */
const LOCAL_FIRST_THEN_WEB_SEO_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Web SEO',
  performance: 'Google Ads',
  avoid: 'Μην ξεκινήσεις μόνο με Web SEO· πρώτα το τοπικό. Μην ξεκινήσεις μόνο με Social Media ως βασική στρατηγική.',
};

/** Εστιατόριο: συμπληρωματική Social Media, χωρίς Google Ads, χωρίς Web SEO */
const LOCAL_SEO_ESTIATORIO_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Social Media',
  performance: 'Συνεχής ενίσχυση Social / τοπικής εμφάνισης',
  avoid: 'Μην αναφέρεις καθόλου Web SEO. Μην προτείνεις Google Ads.',
};

/** Ταβέρνα: συμπληρωματική Social Media */
const LOCAL_SEO_TAVERNA_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Social Media',
  performance: 'Google Ads Αναζήτησης',
  avoid: 'Μην ξεκινήσεις με Web SEO ως πρώτη κίνηση.',
};

/** Νύχια / Κομμωτήρια: μόνο Local SEO, 2ο Social Media */
const NAILS_HAIR_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Social Media',
  performance: 'Συνεχής ενίσχυση Social / τοπικής εμφάνισης',
  avoid: 'Μην ξεκινήσεις με Web SEO ως πρώτη κίνηση.',
};

/** Καφέ: συμπληρωματική μόνο Social Media & TikTok, χωρίς Google Ads */
const LOCAL_SEO_CAFE_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Social Media & TikTok',
  performance: 'Συνεχής ενίσχυση Social / τοπικής εμφάνισης',
  avoid: 'Μην ξεκινήσεις με Web SEO ως πρώτη κίνηση. Μην προτείνεις Google Ads.',
};

/** Πετρέλαια Θέρμανσης: Local SEO, μετά Google Ads, χωρίς Social Media */
const HEATING_OIL_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Google Ads',
  performance: 'Web SEO',
  avoid: 'Μην προτείνεις Social Media.',
};

/** Τομείς με τοπικό πελάτη (τεχνίτες, υπηρεσίες σπιτιού): 1. Local SEO, 2. Google Ads, 3. Web SEO */
const LOCAL_TRADES_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Google Ads',
  performance: 'Web SEO',
  avoid: 'Μην ξεκινήσεις μόνο με Web SEO· ο τοπικός πελάτης ψάχνει «κοντά μου» πρώτα.',
};

const ESHOP_STRATEGY: Strategy = {
  main: 'Social Media Ads',
  secondary: 'Web SEO (αν είναι προϊόν πέρα από ρούχα κλπ)',
  performance: 'Social Media Ads & TikTok',
  avoid: 'Μην προτείνεις Local SEO· στο performance δεν έχει Local SEO. Ρωτήστε technical αν είναι κάτι ιδιαίτερο.',
};

/** Κατάστηματα Ερωτικών Ειδών: μόνο Local SEO, τίποτα άλλο */
const LOCAL_SEO_ONLY_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: '—',
  performance: '—',
  avoid: 'Μην προτείνεις Web SEO, Google Ads ή Social Media.',
};

/** Γραφεία Τελετών: Local SEO και Google Ads, τίποτα άλλο */
const FUNERAL_OFFICE_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Google Ads',
  performance: '—',
  avoid: 'Μην προτείνεις Web SEO ή Social Media.',
};

/** Ανακυκλωτική: Google Ads, Web SEO */
const RECYCLING_STRATEGY: Strategy = {
  main: 'Google Ads',
  secondary: 'Web SEO',
  performance: 'Συνεχής ενίσχυση',
  avoid: 'Μην ξεκινήσεις μόνο με Social Media ως βασική στρατηγική.',
};

/** Mapping τύπου επιχείρησης → στρατηγική. Προσθήκη νέου type = νέο key. */
export const serviceMap: Record<string, Strategy> = {
  'Ξενοδοχείο': HOTEL_VILLA_STRATEGY,
  'Βίλα': HOTEL_VILLA_STRATEGY,
  'Κέντρο Αισθητικής': WEB_SEO_STRATEGY,
  'Κέντρο Ξένων Γλωσσών': HEATING_OIL_STRATEGY,
  'Νύχια': NAILS_HAIR_STRATEGY,
  'Κομμωτήρια': NAILS_HAIR_STRATEGY,
  'Μεσιτικό Γραφείο': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Ηλεκτρολόγος': LOCAL_TRADES_STRATEGY,
  'Υδραυλικός': LOCAL_TRADES_STRATEGY,
  'Αποφράξεις': HEATING_OIL_STRATEGY,
  'Απολυμνάνσεις': HEATING_OIL_STRATEGY,
  'Συνεργείο καθαρισμού': HEATING_OIL_STRATEGY,
  'Μονώσεις ταρατσών': LOCAL_TRADES_STRATEGY,
  'Τέντες': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Πετρέλαια Θέρμανσης': HEATING_OIL_STRATEGY,
  'Δικηγόρος': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Τουριστικό Γραφείο': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Κλινική': WEB_SEO_STRATEGY,
  'Ιατρός': WEB_SEO_STRATEGY,
  'Taxi / Transfer': LOCAL_SEO_STRATEGY,
  'Ενοικίαση σκαφών': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Ενοικίαση αμαξιών': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Ενοικίαση σκούτερ': HEATING_OIL_STRATEGY,
  'Εστιατόριο': LOCAL_SEO_ESTIATORIO_STRATEGY,
  'Ταβέρνα': LOCAL_SEO_TAVERNA_STRATEGY,
  'Καφέ': LOCAL_SEO_CAFE_STRATEGY,
  'Κατάστηματα Ερωτικών Ειδών': LOCAL_SEO_ONLY_STRATEGY,
  'Γραφεία Τελετών': FUNERAL_OFFICE_STRATEGY,
  'Ανακυκλωτική': RECYCLING_STRATEGY,
  Eshop: ESHOP_STRATEGY,
};

/** Λίστα τύπων επιχείρησης για το dropdown (ταξινόμηση όπως στο brief). */
export const BUSINESS_TYPES: readonly string[] = [
  'Ξενοδοχείο',
  'Βίλα',
  'Κέντρο Αισθητικής',
  'Κέντρο Ξένων Γλωσσών',
  'Νύχια',
  'Κομμωτήρια',
  'Μεσιτικό Γραφείο',
  'Ηλεκτρολόγος',
  'Υδραυλικός',
  'Αποφράξεις',
  'Απολυμνάνσεις',
  'Συνεργείο καθαρισμού',
  'Μονώσεις ταρατσών',
  'Τέντες',
  'Πετρέλαια Θέρμανσης',
  'Δικηγόρος',
  'Τουριστικό Γραφείο',
  'Κλινική',
  'Ιατρός',
  'Taxi / Transfer',
  'Ενοικίαση σκαφών',
  'Ενοικίαση αμαξιών',
  'Ενοικίαση σκούτερ',
  'Εστιατόριο',
  'Ταβέρνα',
  'Καφέ',
  'Κατάστηματα Ερωτικών Ειδών',
  'Γραφεία Τελετών',
  'Ανακυκλωτική',
  'Eshop',
] as const;

export function getStrategy(businessType: string): Strategy | null {
  return serviceMap[businessType] ?? null;
}
