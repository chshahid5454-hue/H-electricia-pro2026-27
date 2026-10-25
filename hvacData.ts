import { HVACTopic } from '../types';

export const HVAC_TOPICS_DATA: HVACTopic[] = [
  // 1. Split AC Wiring & Capacitor CSR Identification
  {
    id: 'split-ac-csr-wiring',
    title: 'Single-Phase Split AC Wiring & Compressor CSR Terminal Identification',
    titleUrdu: 'سنگل فیز سپلیٹ اے سی وائرنگ اور کمپریسر CSR ٹرمینلز کی پہچان',
    category: 'ac_wiring',
    description: `Single-phase hermetic reciprocating and rotary AC compressors have three electrical pins:
C = Common, S = Start (Auxiliary winding), R = Run (Main winding).

How to Identify C-S-R using Multimeter Resistance Test:
1. Turn OFF power and discharge the dual run capacitor safely.
2. Label the 3 pins arbitrarily as 1, 2, 3.
3. Measure resistance between all 3 pairs with digital multimeter on low Ohms (200Ω scale):
   - Pair 1-2: e.g., 6.2 Ω
   - Pair 2-3: e.g., 4.1 Ω
   - Pair 1-3: e.g., 2.1 Ω
4. GOLDEN RULE: The pair with the HIGHEST resistance (Pair 1-2 = 6.2Ω) is between START and RUN! Therefore, the remaining opposite pin is strictly COMMON (Pin 3 = Common)!
5. Now measure from Common (Pin 3) to the other two pins:
   - Common to Pin 1 = 4.1 Ω (Higher resistance winding = START winding).
   - Common to Pin 2 = 2.1 Ω (Lower resistance winding = RUN winding).
   - VERIFICATION: R_CS + R_CR = R_SR (4.1 + 2.1 = 6.2 Ω).

Dual Capacitor Connections:
- "C" (Common): Receives Neutral from mains. Also connects to "R" pin of compressor.
- "HERM" (Hermetic Compressor): Connects directly to "S" (Start) pin of compressor.
- "FAN": Connects to the outdoor condenser fan motor start lead.`,
    descriptionUrdu: `سپلیٹ اے سی کمپریسر کے تین ٹرمینلز ہوتے ہیں: C (کامن)، S (سٹارٹ)، R (رن)۔

ملٹی میٹر سے CSR کی پہچان کا سنہری فارمولا:
1. میٹر کو 200 اوہم پر رکھیں۔
2. تینوں ٹرمینلز کے درمیان باری باری مزاحمت ناپیں۔
3. جن دو ٹرمینلز کے درمیان سب سے زیادہ اوہم آئیں گے (مثلاً 6.2 اوہم) وہ Start اور Run ہوں گے، اور جو تیسرا ٹرمینل اکیلا بچ جائے گا وہ لازماً COMMON (کامن) ہوگا!
4. اب کامن سے باقی دونوں کو چیک کریں:
   - جس طرف زیادہ اوہم آئیں گے وہ START وائنڈنگ ہوگی۔
   - جس طرف کم اوہم آئیں گے وہ RUN وائنڈنگ ہوگی۔
5. اصول: R_CS + R_CR = R_SR (کامن سے دونوں کا مجموعہ کل اوہم کے برابر ہونا چاہیے)۔

کپیسیٹر کنکشن:
HERM پوائنٹ سیدھا Start پر جائے گا۔
C پوائنٹ پر نیوٹرل لگے گی اور وہیں سے Run پر تار جائے گی۔`,
    diagramType: 'compressor_csr',
    testingSteps: [
      'Check winding insulation to ground: Each pin to copper pipe should read OL (> 20 Megaohms). If beep sounds, compressor is grounded/burned.',
      'Check dual capacitor with capacitance meter (µF). Replace if down by more than 5%.',
    ],
    testingStepsUrdu: [
      'باڈی شارٹ چیک کریں: کسی بھی پن اور کاپر پائپ کے درمیان بیپ نہیں بولنی چاہیے۔ اگر بیپ بولے تو موٹر شارٹ ہے۔',
      'کپیسیٹر کی مائیکرو فیراڈ ویلیو چیک کریں (مثلاً 50uF)۔ 5 فیصد سے کم ہو تو نیا لگائیں۔',
    ],
  },

  // 2. Chiller Plant Electrical & Flow Switch Interlock
  {
    id: 'chiller-plant-electrical',
    title: 'Central Chiller Plant Electrical Architecture & Safety Interlocks',
    titleUrdu: 'سنٹرل چیلر پلانٹ الیکٹریکل اور واٹر فلو سوئچ انٹرلاک',
    category: 'chiller',
    description: `Central Chiller Plant operation demands strict interlock sequence before compressor can be energized:

Safety Interlock Chain (Must all be closed):
1. Chilled Water Pump (CHWP) Running feedback (Differential pressure switch & Paddle Flow switch).
2. Condenser Water Pump (CWP) Running feedback.
3. Cooling Tower Fan Running feedback.
4. Evaporator Antifreeze thermostat (> 3.5°C).
5. High Refrigerant Pressure Cutout (HP Switch) & Low Pressure Cutout (LP Switch).
6. Motor winding temperature PTC thermistor relay healthy.

Electrical Control:
- Electronic Expansion Valve (EEV) modulation via 0-10V stepper controller.
- Star-Delta or Part-Winding Starter or Dedicated VFD for the 100-500 Ton Screw Compressor motor.`,
    descriptionUrdu: `چیلر پلانٹ میں کمپریسر کو حادثات سے بچانے کیلئے سیفٹی انٹرلاکنگ کا سخت نظام ہوتا ہے:

سیفٹی چین (تمام پوائنٹس بند ہونا ضروری ہیں):
1. واٹر فلو سوئچ: اگر پائپوں میں پانی کا بہاؤ رک جائے تو فلو سوئچ فوراً کمپریسر بند کر دے گا تاکہ کولر کا شیل نہ پھٹے۔
2. کنڈینسر واٹر پمپ چلنے کی فیڈ بیک۔
3. کولنگ ٹاور فین آن فیڈ بیک۔
4. اینٹی فریز تھرموسٹیٹ (پانی کو برف بننے سے روکتا ہے)۔
5. ہائی اور لو پریشر سیفٹی سوئچز۔`,
    diagramType: 'chiller_system',
  },

  // 3. AHU & FCU Control Wiring
  {
    id: 'ahu-fcu-wiring',
    title: 'Air Handling Unit (AHU) & Fan Coil Unit (FCU) Wiring',
    titleUrdu: 'ائیر ہینڈلنگ یونٹ (AHU) اور فین کوائل یونٹ (FCU) کنٹرول وائرنگ',
    category: 'ahu_fcu',
    description: `AHU Electrical Controls:
- Supply Fan Motor Starter: VFD or Star-Delta with fire alarm trip relay.
- Chilled Water Modulating Valve Actuator: 0-10V DC proportional controller (e.g. Belimo actuator). 0V = 100% closed, 10V = 100% open.
- Damper Actuator: Spring return actuator for fresh air / return air mixing. Closes automatically on fire signal.
- Differential Pressure Switch (DPS): Monitors dirty air filter clogging and belt breakage across fan.

FCU Electrical Controls:
- 3-Speed Fan Motor: High, Medium, Low speeds switched by room thermostat.
- 2-Way or 3-Way motorized On/Off thermal valve actuator (230V AC or 24V AC).`,
    descriptionUrdu: `اے ایچ یو اور ایف سی یو وائرنگ:
- اے ایچ یو سپلائی فین موٹر کو وی ایف ڈی سے چلایا جاتا ہے اور فائر الارم پر فوراً بند کر دیا جاتا ہے۔
- بلیمو ماڈولیٹنگ والو ایکچوایٹر 0-10V سگنل سے پانی کے والو کو ضرورت کے مطابق کھولتا ہے۔
- ایئر فلٹر چوک ہونے پر DPS پریشر سوئچ الارم دیتا ہے۔
- ایف سی یو موٹر کے 3 اسپیڈ (ہائی، میڈیم، لو) کنکشنز تھرموسٹیٹ سے آن ہوتے ہیں۔`,
    diagramType: 'ahu_fcu',
  },

  // 4. Thermostat Wiring (4-Wire vs 7-Wire Standard Color Codes)
  {
    id: 'thermostat-wiring',
    title: 'Thermostat Wiring Standards (4-Wire & 7-Wire Heat Pump)',
    titleUrdu: 'تھرموسٹیٹ وائرنگ کے معیاری کلر کوڈز (4-وائر اور 7-وائر)',
    category: 'thermostat',
    description: `Standard North American & International HVAC Thermostat Terminal Color Codes (24V AC Control):`,
    descriptionUrdu: 'تھرموسٹیٹ کے 24V AC کنٹرول میں استعمال ہونے والے بین الاقوامی کلر کوڈز اور ٹرمینلز:',
    thermostatWiring: [
      { terminal: 'R / Rh', wireColor: 'Red', function: '24V AC Power from transformer (Heating)', functionUrdu: '24V اے سی پاور فیز' },
      { terminal: 'Rc', wireColor: 'Red (Jumpered to R)', function: '24V AC Power for Cooling circuitry', functionUrdu: 'کولنگ پاور سپلائی' },
      { terminal: 'C', wireColor: 'Blue or Black', function: '24V AC Common / Neutral (Required for smart thermostats)', functionUrdu: 'کامن / نیوٹرل (اسمارٹ تھرموسٹیٹ کیلئے لازمی)' },
      { terminal: 'Y / Y1', wireColor: 'Yellow', function: 'Compressor Stage 1 Cooling call', functionUrdu: 'کمپریسر کولنگ سگنل' },
      { terminal: 'Y2', wireColor: 'Orange / Pink', function: 'Compressor Stage 2 Cooling (Dual stage systems)', functionUrdu: 'سیکنڈ اسٹیج کولنگ' },
      { terminal: 'G', wireColor: 'Green', function: 'Indoor Blower Fan relay control', functionUrdu: 'انڈور بلوور فین آن' },
      { terminal: 'W / W1', wireColor: 'White', function: 'Heating Stage 1 (Electric heater or furnace)', functionUrdu: 'ہیٹنگ ایلیمنٹ سگنل' },
      { terminal: 'O / B', wireColor: 'Orange or Dark Blue', function: 'Reversing Valve for Heat Pump (O=Energize in Cool, B=Energize in Heat)', functionUrdu: 'ریورسنگ والو برائے ہیٹ پمپ' },
    ],
    diagramType: 'thermostat_7wire',
  },

  // 5. Refrigerant Gas Charging Pressure Chart
  {
    id: 'gas-charging-chart',
    title: 'Refrigerant Gas Pressure Chart (R22, R410A, R32, R134a)',
    titleUrdu: 'ریفریجرینٹ گیس چارجنگ پریشر چارٹ (R22, R410A, R32, R134a)',
    category: 'gas_pressures',
    description: `Standard operating pressure table for AC technicians in Pakistan measured with manifold gauge at ~35°C ambient temperature.`,
    descriptionUrdu: 'پاکستان کے گرم موسم (35 ڈگری سینٹی گریڈ) میں گیس چارج کرتے وقت مینی فولڈ گیج کے صحیح پریشرز:',
    pressureTable: [
      { gas: 'R-22 (Freon HCFC)', suctionPsi: '60 - 70 PSI', dischargePsi: '225 - 250 PSI', standingPsi: '150 - 160 PSI', notesUrdu: 'سنگل کمپاؤنڈ، گیس حالت میں چارج ہو سکتی ہے' },
      { gas: 'R-410A (Eco Blend)', suctionPsi: '120 - 130 PSI', dischargePsi: '380 - 450 PSI', standingPsi: '250 - 275 PSI', notesUrdu: 'بلینڈ گیس، سلنڈر الٹا کر کے صرف مائع (لیکوڈ) چارج کریں' },
      { gas: 'R-32 (New Inverter)', suctionPsi: '115 - 125 PSI', dischargePsi: '360 - 420 PSI', standingPsi: '240 - 260 PSI', notesUrdu: 'آتش گیر گیس (A2L)، آگ اور سپارک سے دور رکھیں' },
      { gas: 'R-134a (Chiller/Fridge)', suctionPsi: '28 - 35 PSI', dischargePsi: '150 - 180 PSI', standingPsi: '85 - 95 PSI', notesUrdu: 'ڈیپ فریزر، کار اے سی اور واٹر چلرز میں استعمال' },
    ],
    diagramType: 'gas_chart',
  },
];
