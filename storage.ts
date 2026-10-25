import { AppSettings, OwnerNote, OwnerRateItem, WorkDiaryEntry } from '../types';
import { INITIAL_RATES_DATA } from '../data/initialRatesData';

const SETTINGS_KEY = 'helectrician_settings';
const OWNER_NOTES_KEY = 'helectrician_owner_notes';
const OWNER_RATES_KEY = 'helectrician_owner_rates';
const WORK_DIARY_KEY = 'helectrician_work_diary';
const FAVORITES_KEY = 'helectrician_favorites';

export const DEFAULT_SETTINGS: AppSettings = {
  pin: '7860', // Default owner PIN code (Shahid Electrician)
  isPinEnabled: true,
  language: 'ur', // Default Urdu for ease of use
  showAdmob: true,
  soundEffects: true,
};

// Seed sample work diary entries so owner sees immediate utility
const SAMPLE_DIARY_ENTRIES: WorkDiaryEntry[] = [
  {
    id: 'diary-sample-1',
    customerName: 'Chaudhry Nadeem (Al-Rehman Rice Mill)',
    phone: '03001234567',
    workType: 'Star Delta Panel & Motor Troubleshooting',
    workTypeUrdu: 'سٹار ڈیلٹا پینل اور 40HP موٹر ٹریپنگ فالٹ',
    billAmount: 18500,
    isPaid: true,
    date: '2026-10-15',
    notes: 'Main contactor coil replace ki 220V AC Schneider. Delta timer 7 second par set kiya. Overload relay 48 Amps par set.',
    createdAt: Date.now() - 86400000 * 3,
  },
  {
    id: 'diary-sample-2',
    customerName: 'Haji Aslam Cloth Market',
    phone: '03217654321',
    workType: '10kW Hybrid Solar Inverter & Battery Setup',
    workTypeUrdu: '10 کلوواٹ ہائبرڈ انورٹر اور لیتھیم بیٹری سیٹ اپ',
    billAmount: 38000,
    isPaid: false,
    date: '2026-10-17',
    notes: 'Inverex Nitrox 10kW lagaya. 5000 baqi hen peer ko denge. Neutral bypass breaker alag lagaya.',
    createdAt: Date.now() - 86400000 * 1,
  },
];

// Seed sample owner field note
const SAMPLE_OWNER_NOTES: Record<string, OwnerNote> = {
  'chiller-wiring': {
    topicId: 'chiller-wiring',
    noteText: 'اوکاڑہ ٹیکسٹائل مل کی چیلر میں واٹر فلو سوئچ (Flow Switch) جام ہو گیا تھا جس کی وجہ سے کمپریسر ٹرپ ہو رہا تھا۔ پیڈل صاف کیا اور ڈیفرینشل 0.5 بار سیٹ کیا تو بالکل ٹھیک چلا۔',
    updatedAt: Date.now() - 86400000 * 5,
  },
  's7-1200-star-delta': {
    topicId: 's7-1200-star-delta',
    noteText: 'فیصل آباد میں ڈیلٹا کنٹیکٹر پک ہوتے ہی ایم سی بی ٹرپ ہوتی تھی۔ پی ایل سی میں انٹرلاک تو تھا مگر ٹائمر کے بعد 50 ملی سیکنڈ کا پاز (Transition Delay) نہیں تھا، دونوں ایک ساتھ آن ہو رہے تھے۔ لیڈر میں ٹائمر کا ڈیلے بڑھایا۔',
    updatedAt: Date.now() - 86400000 * 8,
  },
};

export const StorageService = {
  // Settings
  getSettings(): AppSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (!data) return DEFAULT_SETTINGS;
      return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  },

  // Owner Notes
  getOwnerNote(topicId: string): OwnerNote | null {
    try {
      const allNotes = this.getAllOwnerNotes();
      return allNotes[topicId] || null;
    } catch {
      return null;
    }
  },

  getAllOwnerNotes(): Record<string, OwnerNote> {
    try {
      const data = localStorage.getItem(OWNER_NOTES_KEY);
      if (!data) {
        localStorage.setItem(OWNER_NOTES_KEY, JSON.stringify(SAMPLE_OWNER_NOTES));
        return SAMPLE_OWNER_NOTES;
      }
      return JSON.parse(data);
    } catch {
      return SAMPLE_OWNER_NOTES;
    }
  },

  saveOwnerNote(topicId: string, noteText: string): void {
    try {
      const allNotes = this.getAllOwnerNotes();
      allNotes[topicId] = {
        topicId,
        noteText,
        updatedAt: Date.now(),
      };
      localStorage.setItem(OWNER_NOTES_KEY, JSON.stringify(allNotes));
    } catch (e) {
      console.error('Failed to save note', e);
    }
  },

  deleteOwnerNote(topicId: string): void {
    try {
      const allNotes = this.getAllOwnerNotes();
      delete allNotes[topicId];
      localStorage.setItem(OWNER_NOTES_KEY, JSON.stringify(allNotes));
    } catch (e) {
      console.error('Failed to delete note', e);
    }
  },

  // Owner Rates
  getOwnerRates(): OwnerRateItem[] {
    try {
      const data = localStorage.getItem(OWNER_RATES_KEY);
      if (!data) {
        localStorage.setItem(OWNER_RATES_KEY, JSON.stringify(INITIAL_RATES_DATA));
        return INITIAL_RATES_DATA;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_RATES_DATA;
    }
  },

  saveOwnerRates(rates: OwnerRateItem[]): void {
    try {
      localStorage.setItem(OWNER_RATES_KEY, JSON.stringify(rates));
    } catch (e) {
      console.error('Failed to save rates', e);
    }
  },

  updateRateItem(updatedItem: OwnerRateItem): void {
    const rates = this.getOwnerRates();
    const index = rates.findIndex((r) => r.id === updatedItem.id);
    if (index >= 0) {
      rates[index] = updatedItem;
    } else {
      rates.push(updatedItem);
    }
    this.saveOwnerRates(rates);
  },

  deleteRateItem(id: string): void {
    const rates = this.getOwnerRates().filter((r) => r.id !== id);
    this.saveOwnerRates(rates);
  },

  resetRatesToDefault(): OwnerRateItem[] {
    this.saveOwnerRates(INITIAL_RATES_DATA);
    return INITIAL_RATES_DATA;
  },

  // Work Diary
  getWorkDiaryEntries(): WorkDiaryEntry[] {
    try {
      const data = localStorage.getItem(WORK_DIARY_KEY);
      if (!data) {
        localStorage.setItem(WORK_DIARY_KEY, JSON.stringify(SAMPLE_DIARY_ENTRIES));
        return SAMPLE_DIARY_ENTRIES;
      }
      return JSON.parse(data);
    } catch {
      return SAMPLE_DIARY_ENTRIES;
    }
  },

  saveWorkDiaryEntry(entry: WorkDiaryEntry): void {
    const entries = this.getWorkDiaryEntries();
    const index = entries.findIndex((e) => e.id === entry.id);
    if (index >= 0) {
      entries[index] = entry;
    } else {
      entries.unshift(entry); // newest first
    }
    localStorage.setItem(WORK_DIARY_KEY, JSON.stringify(entries));
  },

  deleteWorkDiaryEntry(id: string): void {
    const entries = this.getWorkDiaryEntries().filter((e) => e.id !== id);
    localStorage.setItem(WORK_DIARY_KEY, JSON.stringify(entries));
  },

  // Favorites
  getFavorites(): string[] {
    try {
      const data = localStorage.getItem(FAVORITES_KEY);
      return data ? JSON.parse(data) : ['ohm-law', 'motor-power-calc', 'plc-star-delta', 'vfd-danfoss-params', 'rccb'];
    } catch {
      return ['ohm-law', 'motor-power-calc', 'plc-star-delta', 'vfd-danfoss-params', 'rccb'];
    }
  },

  toggleFavorite(id: string): boolean {
    const favs = this.getFavorites();
    const index = favs.indexOf(id);
    let isNowFav = false;
    if (index >= 0) {
      favs.splice(index, 1);
      isNowFav = false;
    } else {
      favs.push(id);
      isNowFav = true;
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    return isNowFav;
  },

  isFavorite(id: string): boolean {
    return this.getFavorites().includes(id);
  },

  // Export & Import full database for offline backup
  exportFullBackup(): string {
    const backup = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      owner: 'Shahid Electrician',
      settings: this.getSettings(),
      ownerNotes: this.getAllOwnerNotes(),
      ownerRates: this.getOwnerRates(),
      workDiary: this.getWorkDiaryEntries(),
      favorites: this.getFavorites(),
    };
    return JSON.stringify(backup, null, 2);
  },

  importFullBackup(jsonStr: string): boolean {
    try {
      const data = JSON.parse(jsonStr);
      if (data.settings) localStorage.setItem(SETTINGS_KEY, JSON.stringify(data.settings));
      if (data.ownerNotes) localStorage.setItem(OWNER_NOTES_KEY, JSON.stringify(data.ownerNotes));
      if (data.ownerRates) localStorage.setItem(OWNER_RATES_KEY, JSON.stringify(data.ownerRates));
      if (data.workDiary) localStorage.setItem(WORK_DIARY_KEY, JSON.stringify(data.workDiary));
      if (data.favorites) localStorage.setItem(FAVORITES_KEY, JSON.stringify(data.favorites));
      return true;
    } catch (e) {
      console.error('Import failed', e);
      return false;
    }
  },
};
