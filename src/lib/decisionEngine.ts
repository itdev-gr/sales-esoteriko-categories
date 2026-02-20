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

/** Ψυχολόγοι / Θεραπευτές: Local SEO, Google Ads, Web SEO, Social Media */
const PSYCHOLOGIST_THERAPIST_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Google Ads',
  performance: 'Web SEO, Social Media',
  avoid: 'Μην ξεκινήσεις μόνο με Web SEO ή Social Media ως βασική στρατηγική.',
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

/** Παιδικοί Σταθμοί / Εκπαίδευση: Local SEO και Web SEO, τίποτα άλλο */
const CHILDCARE_EDUCATION_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Web SEO',
  performance: '—',
  avoid: 'Μην προτείνεις Google Ads ή Social Media.',
};

/** Έπιπλα: Local SEO αν έχουν έδρα, μετά Web SEO, Google Ads */
const FURNITURE_STRATEGY: Strategy = {
  main: 'Local SEO (αν έχουν φυσική έδρα)',
  secondary: 'Web SEO',
  performance: 'Google Ads',
  avoid: 'Μην ξεκινήσεις μόνο με Social Media ως βασική στρατηγική.',
};

/** Κοσμηματοπωλεία: μόνο Local SEO και Social Media */
const JEWELRY_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Social Media',
  performance: '—',
  avoid: 'Μην προτείνεις Google Ads ή Web SEO.',
};

/** Γραφεία Τελετών: Local SEO και Google Ads, τίποτα άλλο */
const FUNERAL_OFFICE_STRATEGY: Strategy = {
  main: 'Local SEO',
  secondary: 'Google Ads',
  performance: '—',
  avoid: 'Μην προτείνεις Web SEO ή Social Media.',
};

/** Μεταφορές Μετακομίσεις: Google Ads, Local SEO, Web SEO */
const MOVING_STRATEGY: Strategy = {
  main: 'Google Ads',
  secondary: 'Local SEO',
  performance: 'Web SEO',
  avoid: 'Μην ξεκινήσεις μόνο με Social Media ως βασική στρατηγική.',
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
  'Κέντρα Αισθητικής / Ομορφιά': WEB_SEO_STRATEGY,
  'Κέντρο Ξένων Γλωσσών': HEATING_OIL_STRATEGY,
  'Παιδικοί Σταθμοί / Εκπαίδευση': CHILDCARE_EDUCATION_STRATEGY,
  'Κατασκευαστικές / Ανακαινίσεις': CHILDCARE_EDUCATION_STRATEGY,
  'Ελαιοχρωματισμοί': LOCAL_SEO_ONLY_STRATEGY,
  'Αλουμίνια / Κουφώματα': FUNERAL_OFFICE_STRATEGY,
  'Έπιπλα': FURNITURE_STRATEGY,
  'Λογιστικά Γραφεία': HEATING_OIL_STRATEGY,
  'Συνεργεία Αυτοκινήτων': LOCAL_SEO_ONLY_STRATEGY,
  'Κοσμηματοπωλεία': JEWELRY_STRATEGY,
  'Αρωματοπωλεία': JEWELRY_STRATEGY,
  'Παραδοσιακά Προϊόντα': JEWELRY_STRATEGY,
  'Pilates / Yoga / Γυμναστήρια': LOCAL_SEO_STRATEGY,
  'Bowling / Ψυχαγωγία': FUNERAL_OFFICE_STRATEGY,
  'Κτήματα Δεξιώσεων / Venues': CHILDCARE_EDUCATION_STRATEGY,
  'Ανελκυστήρες': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Επιγραφές': LOCAL_SEO_ONLY_STRATEGY,
  'Tattoo / Piercing': JEWELRY_STRATEGY,
  'Catering': LOCAL_SEO_ONLY_STRATEGY,
  'Ανθοπωλεία': JEWELRY_STRATEGY,
  'Νύχια': NAILS_HAIR_STRATEGY,
  'Κομμωτήρια': NAILS_HAIR_STRATEGY,
  'Μεσιτικό Γραφείο': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Ηλεκτρολόγος': LOCAL_TRADES_STRATEGY,
  'Υδραυλικός': LOCAL_TRADES_STRATEGY,
  'Αποφράξεις': HEATING_OIL_STRATEGY,
  'Απολυμνάνσεις': HEATING_OIL_STRATEGY,
  'Συνεργείο καθαρισμού': HEATING_OIL_STRATEGY,
  'Μονώσεις ταρατσών': LOCAL_TRADES_STRATEGY,
  'Σερβις Κλιματιστικών': HEATING_OIL_STRATEGY,
  'Τέντες': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Πετρέλαια Θέρμανσης': HEATING_OIL_STRATEGY,
  'Δικηγόρος': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Τουριστικό Γραφείο': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Κλινική': WEB_SEO_STRATEGY,
  'Οδοντιατρεία': LOCAL_SEO_STRATEGY,
  'Ψυχολόγοι / Θεραπευτές': PSYCHOLOGIST_THERAPIST_STRATEGY,
  'Φυσικοθεραπεία': LOCAL_SEO_STRATEGY,
  'Φαρμακεία': LOCAL_SEO_ONLY_STRATEGY,
  'Ιατρός': WEB_SEO_STRATEGY,
  'Taxi / Transfer': LOCAL_SEO_STRATEGY,
  'Ενοικίαση σκαφών': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Ενοικίαση αμαξιών': LOCAL_FIRST_THEN_WEB_SEO_STRATEGY,
  'Ενοικίαση σκούτερ': HEATING_OIL_STRATEGY,
  'Μεταφορές Μετακομίσεις': MOVING_STRATEGY,
  'Εστιατόριο': LOCAL_SEO_ESTIATORIO_STRATEGY,
  'Ταβέρνα': LOCAL_SEO_TAVERNA_STRATEGY,
  'Καφέ': LOCAL_SEO_CAFE_STRATEGY,
  'Κατάστηματα Ερωτικών Ειδών': LOCAL_SEO_ONLY_STRATEGY,
  'Γραφεία Τελετών': FUNERAL_OFFICE_STRATEGY,
  'Φωτογράφοι Γάμων και Βαπτισης': FUNERAL_OFFICE_STRATEGY,
  'Ανακυκλωτική': RECYCLING_STRATEGY,
  Eshop: ESHOP_STRATEGY,
};

/** Λίστα τύπων επιχείρησης για το dropdown (ταξινόμηση όπως στο brief). */
export const BUSINESS_TYPES: readonly string[] = [
  'Ξενοδοχείο',
  'Βίλα',
  'Κέντρα Αισθητικής / Ομορφιά',
  'Κέντρο Ξένων Γλωσσών',
  'Παιδικοί Σταθμοί / Εκπαίδευση',
  'Κατασκευαστικές / Ανακαινίσεις',
  'Ελαιοχρωματισμοί',
  'Αλουμίνια / Κουφώματα',
  'Έπιπλα',
  'Λογιστικά Γραφεία',
  'Συνεργεία Αυτοκινήτων',
  'Κοσμηματοπωλεία',
  'Αρωματοπωλεία',
  'Παραδοσιακά Προϊόντα',
  'Pilates / Yoga / Γυμναστήρια',
  'Bowling / Ψυχαγωγία',
  'Κτήματα Δεξιώσεων / Venues',
  'Ανελκυστήρες',
  'Επιγραφές',
  'Tattoo / Piercing',
  'Catering',
  'Ανθοπωλεία',
  'Νύχια',
  'Κομμωτήρια',
  'Μεσιτικό Γραφείο',
  'Ηλεκτρολόγος',
  'Υδραυλικός',
  'Αποφράξεις',
  'Απολυμνάνσεις',
  'Συνεργείο καθαρισμού',
  'Μονώσεις ταρατσών',
  'Σερβις Κλιματιστικών',
  'Τέντες',
  'Πετρέλαια Θέρμανσης',
  'Δικηγόρος',
  'Τουριστικό Γραφείο',
  'Κλινική',
  'Οδοντιατρεία',
  'Ψυχολόγοι / Θεραπευτές',
  'Φυσικοθεραπεία',
  'Φαρμακεία',
  'Ιατρός',
  'Taxi / Transfer',
  'Ενοικίαση σκαφών',
  'Ενοικίαση αμαξιών',
  'Ενοικίαση σκούτερ',
  'Μεταφορές Μετακομίσεις',
  'Εστιατόριο',
  'Ταβέρνα',
  'Καφέ',
  'Κατάστηματα Ερωτικών Ειδών',
  'Γραφεία Τελετών',
  'Φωτογράφοι Γάμων και Βαπτισης',
  'Ανακυκλωτική',
  'Eshop',
] as const;

export function getStrategy(businessType: string): Strategy | null {
  return serviceMap[businessType] ?? null;
}
