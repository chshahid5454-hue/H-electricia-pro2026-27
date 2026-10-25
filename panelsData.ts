import { IndustrialPanelTopic } from '../types';

export const PANELS_TOPICS_DATA: IndustrialPanelTopic[] = [
  // 1. MCC & PCC Panels
  {
    id: 'mcc-pcc-panels',
    title: 'MCC (Motor Control Center) & PCC (Power Control Center)',
    titleUrdu: 'موٹر کنٹرول سینٹر (MCC) اور پاور کنٹرول سینٹر (PCC) پینلز',
    category: 'mcc',
    description: `PCC (Power Control Center):
- Located directly downstream of 11kV/400V distribution transformer.
- Houses Air Circuit Breakers (ACB) rated 800A to 4000A with microprocessor trip units (LSIG: Long-time, Short-time, Instantaneous, Ground fault protection).
- Main distribution busbars distribute power to MCC panels, sub-distribution boards, and APFC capacitor banks.

MCC (Motor Control Center):
- Houses individual motor starter compartments (Draw-out or Fixed type feeders).
- Each feeder contains: Isolator/MCCB, Contactor, Thermal Overload Relay, Ammeter, Phase pilot lights, and Start/Stop control.
- Form 4b segregation: Separate compartments for Busbars, Functional Units, and Cable Terminations to prevent arc-flash spread.`,
    descriptionUrdu: `پی سی سی (PCC) اور ایم سی سی (MCC) پینلز:

PCC پینل:
ٹرانسفارمر کے فوراً بعد مین پینل جس میں 800 سے 4000 ایمپئر کا ائیر سرکٹ بریکر (ACB) لگا ہوتا ہے جو پوری فیکٹری کا مین بریکر ہے۔

MCC پینل:
فیکٹری کی تمام موٹروں کو ایک ہی جگہ سے چلانے اور کنٹرول کرنے والا پینل۔ اس کے ہر خانے میں موٹر کا بریکر، کنٹیکٹر، اوور لوڈ ریلے اور ایمپئر میٹر لگا ہوتا ہے۔`,
    diagramType: 'mcc_panel',
  },

  // 2. APFC (Automatic Power Factor Correction) Panel
  {
    id: 'apfc-panel',
    title: 'APFC Panel (Automatic Power Factor Correction Steps & Detuned Reactors)',
    titleUrdu: 'اے پی ایف سی پینل (آٹومیٹک پاور فیکٹر امپروومنٹ اور ری ایکٹرز)',
    category: 'apfc',
    description: `APFC Panel Components:
1. Microprocessor PF Controller Relay (6, 8, or 12 Steps): Monitors line current (via CT 5A secondary on incoming main phase) and voltage, switching capacitor steps to maintain cosφ = 0.98.
2. Capacitor Duty Contactors: Fitted with early-make auxiliary damping resistors to absorb massive inrush switching currents that would weld standard contactor contacts.
3. Heavy Duty MPP (Metalized Polypropylene) Gas-Filled Capacitors.
4. Detuned Harmonic Filter Reactors (7% or 14%): Essential when VFDs, induction heaters, and LED lighting create harmonic currents. Prevents LC resonance that would cause capacitors to burst or catch fire!`,
    descriptionUrdu: `اے پی ایف سی پینل کی تفصیل:
1. آٹو پی ایف کنٹرولر ریلے: مین بس بار پر لگی سی ٹی (CT) سے کرنٹ چیک کر کے ضرورت کے مطابق کپیسیٹر سٹیپ آن آف کرتی ہے۔
2. کپیسیٹر ڈیوٹی کنٹیکٹرز: ان کے اوپر اسپیشل ڈیمپنگ پتی اور ریزسٹر لگے ہوتے ہیں جو کپیسیٹر آن ہوتے وقت کا زبردست جھٹکا جذب کرتے ہیں۔
3. ڈی ٹیونڈ ری ایکٹرز (7% / 14% چوکس): اگر فیکٹری میں انورٹرز لگے ہوں تو ہارمونکس سے کپیسیٹر پھٹنے سے بچانے کیلئے ری ایکٹر لازمی لگائے جاتے ہیں۔`,
    diagramType: 'apfc_steps',
  },

  // 3. Copper & Aluminum Busbar Sizing Chart
  {
    id: 'busbar-sizing-chart',
    title: 'Busbar Sizing Table (Copper vs Aluminum Amperage Capacity)',
    titleUrdu: 'بس بار سائزنگ چارٹ (کاپر اور ایلومینیم پٹی کی گنجائش)',
    category: 'busbar_chart',
    description: `Standard busbar current ratings based on temperature rise of 35°C above 40°C ambient (Pakistani panel building standard):
- Pure Electrolytic Copper (99.9% Cu): Current density = 1.2 to 1.6 Amps/mm²
- High-grade Electrical Aluminum (EC Grade): Current density = 0.8 to 1.0 Amps/mm²`,
    descriptionUrdu: 'پینل بناتے وقت بس بار کا سائز نکالنے کا سنہری چارٹ (کاپر 1.5 ایمپئر فی مربع ملی میٹر اور ایلومینیم 0.8 ایمپئر فی مربع ملی میٹر):',
    busbarData: [
      { currentA: '100 Amps', copperMm: '20 mm × 3 mm (60 mm²)', aluminumMm: '25 mm × 4 mm (100 mm²)', thicknessMm: '3mm / 4mm' },
      { currentA: '200 Amps', copperMm: '25 mm × 5 mm (125 mm²)', aluminumMm: '30 mm × 6 mm (180 mm²)', thicknessMm: '5mm / 6mm' },
      { currentA: '400 Amps', copperMm: '40 mm × 6 mm (240 mm²)', aluminumMm: '50 mm × 8 mm (400 mm²)', thicknessMm: '6mm / 8mm' },
      { currentA: '630 Amps', copperMm: '50 mm × 10 mm (500 mm²)', aluminumMm: '60 mm × 10 mm (600 mm²)', thicknessMm: '10mm' },
      { currentA: '800 Amps', copperMm: '60 mm × 10 mm (600 mm²)', aluminumMm: '80 mm × 10 mm (800 mm²)', thicknessMm: '10mm' },
      { currentA: '1000 Amps', copperMm: '80 mm × 10 mm (800 mm²)', aluminumMm: '100 mm × 10 mm (1000 mm²)', thicknessMm: '10mm' },
      { currentA: '1250 Amps', copperMm: '100 mm × 10 mm (1000 mm²)', aluminumMm: '120 mm × 10 mm (1200 mm²)', thicknessMm: '10mm' },
      { currentA: '1600 Amps', copperMm: '2 Runs of (80 mm × 10 mm)', aluminumMm: '2 Runs of (100 mm × 10 mm)', thicknessMm: 'Dual bar per phase' },
      { currentA: '2000 Amps', copperMm: '2 Runs of (100 mm × 10 mm)', aluminumMm: '2 Runs of (120 mm × 10 mm)', thicknessMm: 'Dual bar per phase' },
      { currentA: '3200 Amps', copperMm: '3 Runs of (100 mm × 10 mm)', aluminumMm: '4 Runs of (100 mm × 10 mm)', thicknessMm: 'Triple/Quad bar' },
    ],
    diagramType: 'busbar_layout',
  },

  // 4. Cable Gland Sizing Chart (Armoured XLPE to Gland)
  {
    id: 'cable-gland-chart',
    title: 'Industrial Cable Gland Sizing Chart (PG & Metric M-Series)',
    titleUrdu: 'کیبل گلینڈ سلیکشن چارٹ (PG اور میٹرک سائزز)',
    category: 'cable_gland',
    description: `Selection table for brass compression cable glands (BW / CW / A2 type) for 4-core copper armoured (SWA) and unarmoured power cables:`,
    descriptionUrdu: 'آرمرڈ (سفاری تار والی) پاور کیبلز کیلئے پیتل کے گلینڈ کا انتخاب چارٹ:',
    cableGlandData: [
      { cableSizeSqmm: '4-Core 2.5 mm² - 4.0 mm²', glandSizePG: 'PG 16 / PG 21', glandSizeMetric: 'M20 × 1.5', holeDiameterMm: '20.5 mm' },
      { cableSizeSqmm: '4-Core 6.0 mm² - 10 mm²', glandSizePG: 'PG 21 / PG 29', glandSizeMetric: 'M25 × 1.5', holeDiameterMm: '25.5 mm' },
      { cableSizeSqmm: '4-Core 16 mm² Armoured', glandSizePG: 'PG 29', glandSizeMetric: 'M32 × 1.5', holeDiameterMm: '32.5 mm' },
      { cableSizeSqmm: '4-Core 25 mm² - 35 mm²', glandSizePG: 'PG 36', glandSizeMetric: 'M40 × 1.5', holeDiameterMm: '40.5 mm' },
      { cableSizeSqmm: '4-Core 50 mm² Armoured', glandSizePG: 'PG 42', glandSizeMetric: 'M50 × 1.5', holeDiameterMm: '50.5 mm' },
      { cableSizeSqmm: '4-Core 70 mm² - 95 mm²', glandSizePG: 'PG 48', glandSizeMetric: 'M63 × 1.5', holeDiameterMm: '63.5 mm' },
      { cableSizeSqmm: '4-Core 120 mm² - 150 mm²', glandSizePG: 'Heavy Gland', glandSizeMetric: 'M75 × 1.5', holeDiameterMm: '75.5 mm' },
      { cableSizeSqmm: '4-Core 185 mm² - 240 mm²', glandSizePG: 'Industrial Gland', glandSizeMetric: 'M90 × 2.0', holeDiameterMm: '90.5 mm' },
    ],
    diagramType: 'switchgear_coordination',
  },
];
