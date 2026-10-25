import { FireAlarmTopic } from '../types';

export const FIRE_ALARM_TOPICS_DATA: FireAlarmTopic[] = [
  // 1. Conventional vs Addressable
  {
    id: 'conv-vs-addressable',
    title: 'Conventional vs Addressable Fire Alarm Systems Comparison',
    titleUrdu: 'کنوینشنل بمقابلہ ایڈریسیبل فائر الارم سسٹم موازنہ',
    category: 'conventional_vs_addressable',
    description: `Conventional Systems (Zone-Based):
- Devices grouped in physical radial zones (typically 20-30 detectors per zone).
- Uses End-of-Line Resistor (EOLR, usually 4.7kΩ or 10kΩ) at the last device to detect cable breaks.
- In alarm, panel only indicates the general ZONE number (e.g., "Zone 3 - First Floor"), not the specific room or smoke detector.
- Ideal for small buildings, shops, and small warehouses (cost effective).

Addressable Systems (Loop-Based):
- Devices wired in a continuous closed 2-wire signaling line loop (Loop OUT from panel -> through all detectors -> Loop RETURN to panel).
- Each detector has a unique electronic DIP switch or software ID number (Address 001 to 250).
- Pinpoints exact location on LCD screen (e.g., "Room 204 - Photoelectric Smoke Detector 42 Alarm").
- Loop Isolator Modules prevent a cable short circuit from killing more than one section.
- Ideal for hospitals, high-rise plazas, factories, and hotels.`,
    descriptionUrdu: `کنوینشنل بمقابلہ ایڈریسیبل فائر سسٹم:

کنوینشنل سسٹم (زون سسٹم):
تار سیدھی نکلتی ہے اور آخری ڈیٹیکٹر پر 4.7kΩ کا ریزسٹر لگایا جاتا ہے۔ آگ لگنے پر پینل صرف زون کا نام بتاتا ہے (مثلاً زون 2 گراؤنڈ فلور)، مگر کمرے کی نشاندہی نہیں کر سکتا۔

ایڈریسیبل سسٹم (لوپ سسٹم):
تار پینل سے نکل کر تمام ڈیٹیکٹرز سے گھوم کر واپس پینل میں لوپ بند کرتی ہے۔ ہر ڈیٹیکٹر کا الگ کمپیوٹرائزڈ نمبر (ایڈریس) ہوتا ہے اور سکرین پر عین کمرے کا نمبر لکھ کر آتا ہے کہ کون سے ڈیٹیکٹر نے دھواں پکڑا ہے۔`,
    wiringDiagramType: 'conv_vs_addr',
    specs: [
      { label: 'Operating Voltage', value: '24V DC (backed by 2x 12V 7Ah / 17Ah batteries)', labelUrdu: 'آپریٹنگ وولٹیج (24V DC)' },
      { label: 'Cable Specification', value: '2-Core 1.5mm² Red Fire Resistant (FP200 / MICC)', labelUrdu: 'فائر پروف ریڈ کیبل (FP200)' },
      { label: 'Loop Resistance Limit', value: 'Typically < 25 Ohms loop resistance', labelUrdu: 'لوپ کی کل مزاحمت (< 25 اوہم)' },
    ],
  },

  // 2. Detectors & Notification Appliances
  {
    id: 'fire-detectors-wiring',
    title: 'Smoke, Heat & Beam Detectors, MCP & Hooter Wiring',
    titleUrdu: 'اسموک، ہیٹ اور بیم ڈیٹیکٹرز، مینوئل کال پوائنٹ اور ہوٹر وائرنگ',
    category: 'detectors',
    description: `Detector Types:
1. Optical Photoelectric Smoke Detector: Light scattering chamber detects slow-smoldering fires (furniture, cables, plastic).
2. Rate-of-Rise & Fixed Heat Detector (57°C / 68°C): Used in kitchens, boiler rooms, and generator rooms where dust or steam would cause false smoke alarms.
3. Optical Infrared Beam Detector: Transmitter sends modulated IR beam across 100 meters to receiver or reflector. Ideal for high ceilings (warehouses, factories, mosques).
4. Manual Call Point (MCP): "Break Glass" or resettable push switch for human emergency trigger.
5. Sounder / Hooter with Strobe: Combined 100dB siren and xenon/LED flashing strobe for evacuation alert.`,
    descriptionUrdu: `ڈیٹیکٹرز اور الارم کی اقسام:
1. اسموک ڈیٹیکٹر: دھواں پکڑنے والا آپٹیکل چیمبر۔ دفاتر اور راہداریوں کیلئے۔
2. ہیٹ ڈیٹیکٹر: حرارت (57°C یا درجہ حرارت اچانک بڑھنے) کو پکڑتا ہے۔ کچن، جنریٹر روم اور بوائلر کیلئے۔
3. بیم ڈیٹیکٹر: 100 میٹر لمبی انفراریڈ شعاع کے ذریعے فیکٹریوں اور گوداموں کے اونچے ہال میں دھواں پکڑتا ہے۔
4. بریک گلاس کال پوائنٹ (MCP): آگ دیکھنے پر انسان کے ہاتھ سے دبانے کیلئے سوئچ۔
5. ہوٹر اور فلیشر لائٹ: ایمرجنسی میں اونچی آواز اور چمکتی ہوئی روشنی سے الرٹ کرنا۔`,
    wiringDiagramType: 'detector_wiring',
  },

  // 3. Fire Panel Wiring (GST-200 / Honeywell Morley)
  {
    id: 'gst-panel-wiring',
    title: 'Fire Alarm Control Panel (GST-200 / Honeywell) Terminal Wiring',
    titleUrdu: 'فائر الارم کنٹرول پینل (GST / ہنی ویل) ٹرمینل وائرنگ',
    category: 'panel_wiring',
    description: `Standard GST-200 / Morley-IAS Panel Terminals:
1. Mains Supply: 230V AC Live, Neutral, and dedicated Earth.
2. Battery Terminals: +24V and -24V (Connect two 12V lead-acid batteries in series).
3. Loop 1 Terminals:
   - Loop OUT (+ & -): Feeds the beginning of the detector chain.
   - Loop IN (+ & -): Receives the returning loop cable, completing the ring.
4. Sounder / NAC (Notification Appliance Circuit) Outputs:
   - Polarized 24V DC circuit.
   - In normal state, reverse monitoring voltage (-5V) checks cable integrity.
   - In alarm state, polarity reverses to +24V DC to fire all hooters.
   - End-of-Line Resistor (usually 10kΩ) must be installed at the last hooter!
5. Fault & Alarm Relay Outputs: Voltage-free dry contacts (COM, NO, NC) for shutting down AC AHU fans, releasing access doors, and signaling lift to ground floor.`,
    descriptionUrdu: `جی ایس ٹی (GST-200) اور ہنی ویل پینل کی وائرنگ:
1. مین سپلائی: 230V AC اور گرؤنڈ۔
2. بیٹری ٹرمینلز: 24V (دو 12 وولٹ بیٹریاں سیریز میں)۔
3. لوپ 1 ٹرمینلز:
   - Loop OUT (+ اور -): ڈیٹیکٹرز کو سپلائی بھیجتا ہے۔
   - Loop IN (+ اور -): واپسی کیبل لوپ بند کرنے کیلئے لگتی ہے۔
4. ہوٹر / بیل ٹرمینلز (NAC): 24V آؤٹ پٹ۔ اس کے آخری ہوٹر پر 10kΩ ریزسٹر لازمی لگتا ہے تاکہ تار ٹوٹنے پر فالٹ آئے۔
5. فائر ریلے (COM/NO/NC): آگ لگنے پر اے سی کے فین بند کرنے اور لفٹ کو گراؤنڈ پر لانے کیلئے سگنل دیتی ہے۔`,
    wiringDiagramType: 'gst_panel',
  },

  // 4. Fire Alarm Fault Finding Guru
  {
    id: 'fire-alarm-fault-finding',
    title: 'Fire Alarm Fault Finding & Diagnostic Guide',
    titleUrdu: 'فائر الارم فالٹ فائنڈنگ اور ٹربل شوٹنگ گائیڈ',
    category: 'fault_finding',
    description: `Diagnostic guide for the most common fire panel troubles:`,
    descriptionUrdu: 'فائر پینل میں آنے والے عام فالٹس اور ان کا فوری حل:',
    faultRemedies: [
      {
        fault: 'Open Circuit Fault (زون یا لوپ بریک فالٹ)',
        faultUrdu: 'اوپن سرکٹ / تار ٹوٹنے کا فالٹ',
        cause: 'Cut wire, loose screw on detector base, or missing End-of-Line resistor.',
        causeUrdu: 'تار کٹ جانا، ڈیٹیکٹر بیس کا اسکرو ڈھیلا ہونا، یا EOL ریزسٹر نکل جانا۔',
        remedy: 'Measure loop resistance with multimeter (should be < 25Ω). Measure DC voltage across loop ends. Find open junction.',
        remedyUrdu: 'ملٹی میٹر سے لوپ کی تاریں اور آخری سرے پر ریزسٹر چیک کریں۔',
      },
      {
        fault: 'Ground / Earth Fault (ارتھ فالٹ)',
        faultUrdu: 'ارتھ شارٹ فالٹ',
        cause: 'Cable insulation rubbed against sharp conduit edges or moisture ingress in an outdoor call point.',
        causeUrdu: 'تار کا میٹل پائپ یا باڈی کے ساتھ ننگا ٹچ ہونا یا پانی/نمی چلے جانا۔',
        remedy: 'Disconnect loop wires one by one and test resistance to building earth with Megger on 250V range (> 1MΩ required).',
        remedyUrdu: 'لوپ کی تار الگ کر کے میگر سے باڈی ارتھ ٹیسٹ کریں۔',
      },
      {
        fault: 'False Alarm / Device Contaminated',
        faultUrdu: 'جھوٹا الارم / ڈیٹیکٹر میں گرد و غبار',
        cause: 'Dust accumulation in optical smoke chamber from construction or insect intrusion.',
        causeUrdu: 'تعمیراتی کام کی دھول مٹی یا مکڑی کے جالے ڈیٹیکٹر کے چیمبر میں چلے جانا۔',
        remedy: 'Remove detector head from base with removal tool; clean optical labyrinth using compressed air can.',
        remedyUrdu: 'ڈیٹیکٹر کو گھما کر کھولیں اور ائیر کین یا بلوور سے اس کے سینسر چیمبر کو صاف کریں۔',
      },
    ],
    wiringDiagramType: 'fire_faults',
  },
];
