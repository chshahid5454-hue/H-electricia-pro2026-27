import { SensorItem } from '../types';

export const SENSORS_DATA: SensorItem[] = [
  // 1. PNP vs NPN Proximity Sensors
  {
    id: 'pnp-vs-npn',
    title: 'PNP vs NPN Proximity Sensors (Sourcing vs Sinking)',
    titleUrdu: 'پی این پی بمقابلہ این پی این پراکسیمیٹی سینسرز (سورسنگ بمقابلہ سنکنگ)',
    type: 'proximity_pnp_npn',
    symbolName: 'PNP / NPN Proximity Switch Symbol',
    colorCode: [
      { wire: 'Brown (BN)', color: '#8B4513', signal: '+24V DC (Power Positive)', colorUrdu: 'براؤن (بھورا)', signalUrdu: '+24 وولٹ ڈی سی سپلائی' },
      { wire: 'Blue (BU)', color: '#1E3A8A', signal: '0V / GND (Power Negative)', colorUrdu: 'بلیو (نیلا)', signalUrdu: '0 وولٹ مائنس / نیوٹرل' },
      { wire: 'Black (BK)', color: '#000000', signal: 'Load Signal Output (NO / NC)', colorUrdu: 'بلیک (کالا)', signalUrdu: 'سگنل آؤٹ پٹ (لوڈ کیلئے)' },
      { wire: 'White (WH)', color: '#FFFFFF', signal: 'Complementary Output (NC on 4-wire)', colorUrdu: 'وائٹ (سفید)', signalUrdu: 'این سی آؤٹ پٹ (4 تار سینسر میں)' },
    ],
    workingPrinciple: `PNP (Sourcing):
- When sensor activates, the internal transistor switches +24V DC to the Black output wire.
- Load (PLC input or relay coil) connects between Black wire and 0V (Blue).
- Standard in European and Siemens automation systems. Very safe because if signal wire shorts to ground (chassis), it blows fuse instead of falsely triggering machine.

NPN (Sinking):
- When sensor activates, the internal transistor connects the Black output wire to 0V (GND).
- Load connects between Black wire and +24V (Brown).
- Popular in Japanese machinery (Mitsubishi, Omron) and Asian CNC routers.`,
    workingPrincipleUrdu: `پی این پی (PNP - سورسنگ):
جب سینسر کے آگے میٹل یا چیز آئے گی تو کالی تار (Black) پر +24V کرنٹ آئے گا۔ یہ سگنل پی ایل سی کے ان پٹ یا 24V ریلے کو دیا جاتا ہے۔ یورپ اور سیمنز سسٹم میں زیادہ تر یہی استعمال ہوتا ہے۔

این پی این (NPN - سنکنگ):
جب سینسر ایکٹو ہوتا ہے تو کالی تار کو 0V (مائنس) بنا دیتا ہے۔ یعنی لوڈ 24V اور کالی تار کے درمیان لگایا جاتا ہے۔ جاپانی اور چینی مشینوں میں زیادہ استعمال ہوتا ہے۔`,
    testingMethod: [
      '1. Connect Brown wire to +24V DC and Blue wire to 0V DC from test supply.',
      '2. Set digital multimeter to DC Volts (200V range).',
      '3. For PNP: Put Black meter probe on Blue wire (0V). Put Red meter probe on Black wire (Signal).',
      '4. Bring a metal screwdriver close to the sensor face. The sensor LED will turn ON. The meter must read +24V DC. When metal is removed, meter reads 0V.',
      '5. For NPN: Put Red meter probe on Brown wire (+24V). Put Black probe on Black wire (Signal). On sensing metal, meter will jump from 0V to +24V.',
      '6. If LED stays permanently ON without metal or output stays 0V, internal transistor is blown.',
    ],
    testingMethodUrdu: [
      '1. براؤن کو +24V اور نیلی تار کو 0V سپلائی دیں۔',
      '2. ملٹی میٹر کو DC وولٹ پر رکھیں۔',
      '3. پی این پی چیک کرنے کیلئے: میٹر کی کالی لیڈ نیلی تار (0V) پر اور سرخ لیڈ کالی تار پر رکھیں۔',
      '4. سینسر کے سامنے لوہے کا پیچ کس لائیں۔ سینسر کی بتی جلے گی اور میٹر پر پورے 24 وولٹ شو ہوں گے۔ پیچ کس ہٹانے پر 0 وولٹ ہونا چاہیے۔',
      '5. این پی این چیک کرنے کیلئے: سرخ لیڈ براؤن (+24V) پر اور کالی لیڈ سگنل کی کالی تار پر رکھ کر چیک کریں۔',
      '6. اگر سینسر کی لائٹ ہر وقت جلتی رہے یا وولٹ نہ آئیں تو اندرونی ٹرانزسٹر جل چکا ہے۔',
    ],
    applications: ['Conveyor part counting', 'Position feedback', 'Cylinder reed end-stops', 'Safety gate interlocks'],
    applicationsUrdu: ['کنویئر بیلٹ پر کاؤنٹنگ', 'مشین پوزیشن چیک کرنا', 'نیومیٹک سلنڈر اینڈ لمٹ', 'سیفٹی گیٹ'],
    diagramType: 'pnp_npn',
  },

  // 2. Inductive Proximity Sensor
  {
    id: 'inductive-sensor',
    title: 'Inductive Proximity Sensor (Metal Detection)',
    titleUrdu: 'انڈکٹو پراکسیمیٹی سینسر (صرف دھات / میٹل کی شناخت)',
    type: 'inductive',
    symbolName: 'Inductive Sensor Symbol with Coil Core',
    colorCode: [
      { wire: 'Brown', color: '#8B4513', signal: '+10V to 30V DC', colorUrdu: 'براؤن', signalUrdu: '+24V پاور' },
      { wire: 'Blue', color: '#1E3A8A', signal: '0V DC', colorUrdu: 'بلیو', signalUrdu: '0V گراؤنڈ' },
      { wire: 'Black', color: '#000000', signal: 'Signal Out (NO)', colorUrdu: 'بلیک', signalUrdu: 'آؤٹ پٹ' },
    ],
    workingPrinciple: 'Uses an internal oscillator and electromagnetic coil to create a high-frequency magnetic field at the sensing face. When a ferrous or non-ferrous metal object enters the field, eddy currents are induced, dampening oscillation and triggering the output circuit. Ignores water, plastic, wood, and dust completely.',
    workingPrincipleUrdu: 'یہ سینسر اپنے منہ پر مقناطیسی فیلڈ پیدا کرتا ہے۔ جیسے ہی کوئی لوہا، سٹیل، تانبا یا ایلومینیم آگے آئے گا یہ فوری سگنل دے گا۔ پانی، پلاسٹک، لکڑی یا گرد و غبار سے یہ دھوکہ نہیں کھاتا۔',
    testingMethod: [
      '1. Inspect face for physical cracks or dents from mechanical collision.',
      '2. Power with 24V DC. Check quiescent current (typically 10-15mA).',
      '3. Measure sensing range: M12 sensors detect steel at ~2mm-4mm; M18 at ~5mm-8mm; M30 at ~10mm-15mm.',
      '4. Correction Factor: Note that Aluminum and Brass reduce sensing distance by ~50% compared to Iron/Steel.',
    ],
    testingMethodUrdu: [
      '1. سینسر کے اگلے حصے پر چوٹ یا کریک کا معائنہ کریں۔',
      '2. 24V ڈی سی دے کر ملٹی میٹر سے چیک کریں۔',
      '3. M12 سائز کا سینسر 4 ملی میٹر، M18 سائز 8 ملی میٹر اور M30 سائز 15 ملی میٹر فاصلے سے میٹل کو پکڑتا ہے۔',
      '4. یاد رکھیں کہ ایلومینیم اور پیتل پر سینسنگ فاصلہ لوہے کے مقابلے میں آدھا رہ جاتا ہے۔',
    ],
    applications: ['Steel shaft speed RPM measurement', 'Piston position sensing', 'Motor gear tooth detection'],
    applicationsUrdu: ['موٹر شافٹ کے چکر (RPM) گننا', 'مشین پسٹن پوزیشن', 'گیئر دانتوں کی گنتی'],
    diagramType: 'inductive_sensor',
  },

  // 3. Capacitive & Photoelectric Sensors
  {
    id: 'capacitive-photoelectric',
    title: 'Capacitive & Photoelectric Optical Sensors',
    titleUrdu: 'کپیسیٹو اور فوٹو الیکٹرک (آپٹیکل) سینسرز',
    type: 'capacitive',
    symbolName: 'Capacitive / Photoelectric Optical Symbol',
    colorCode: [
      { wire: 'Brown', color: '#8B4513', signal: '+24V DC', colorUrdu: 'براؤن', signalUrdu: '+24V' },
      { wire: 'Blue', color: '#1E3A8A', signal: '0V GND', colorUrdu: 'بلیو', signalUrdu: '0V' },
      { wire: 'Black', color: '#000000', signal: 'NO Signal Output', colorUrdu: 'بلیک', signalUrdu: 'NO سگنل' },
    ],
    workingPrinciple: `Capacitive Sensor:
Detects changes in electrostatic capacitance. Capable of detecting ANY material: liquids (water, oil), powders (flour, cement, grain), glass, and plastic through non-metallic tank walls! Has a sensitivity potentiometer screw on the back.

Photoelectric (Optical) Sensors:
1. Through-Beam: Separate Transmitter and Receiver aligned up to 20m. Highest reliability.
2. Retro-Reflective: Transmitter & receiver in one housing with polarized reflector mirror.
3. Diffuse-Reflective: Bounces light directly off the object.`,
    workingPrincipleUrdu: `کپیسیٹو سینسر:
یہ دھات کے علاوہ ہر قسم کے مٹیریل کو پکڑ سکتا ہے: پانی، تیل، دودھ، اناج، سیمنٹ، پلاسٹک بوتلیں۔ یہاں تک کہ پلاسٹک پائپ کے باہر سے اندر کے پانی کی سطح معلوم کر سکتا ہے۔

فوٹو الیکٹرک آپٹیکل سینسر:
روشنی کی شعاع (لیزر یا انفراریڈ) سے کام کرتا ہے۔ گتے کے ڈبے، کپڑا، پیکنگ مٹیریل اور دور سے اشیاء کو چیک کرنے کیلئے بہترین ہے۔`,
    testingMethod: [
      '1. Clean lens / sensing face with isopropyl alcohol.',
      '2. Adjust sensitivity trimmer on back: turn clockwise to increase sensitivity, counter-clockwise to reduce.',
      '3. For photoelectric: Check alignment LED. Green indicates stable signal margin; Orange indicates output triggered.',
    ],
    testingMethodUrdu: [
      '1. سینسر کے شیشے کو صاف کریں۔',
      '2. پچھلے حصے پر لگے ہوئے اسکرو سے حساسیت (Sensitivity) سیٹ کریں۔',
      '3. ملٹی میٹر سے کالی تار پر 24V آؤٹ پٹ چیک کریں۔',
    ],
    applications: ['Grain hopper level sensing', 'Liquid bottle filling line', 'Conveyor carton detection'],
    applicationsUrdu: ['اناج کے ہاپر کا لیول', 'بوتل فلنگ پلانٹ', 'کارٹن پیکنگ کنویئر'],
    diagramType: 'photoelectric_sensor',
  },

  // 4. Industrial Limit Switch & Testing
  {
    id: 'limit-switch-industrial',
    title: 'Mechanical Limit Switch (Roller, Lever & Plunger)',
    titleUrdu: 'مکینکل لمٹ سوئچ (رولر، لیور اور پلنجر ٹائپ)',
    type: 'limit_switch',
    symbolName: 'Limit Switch NO/NC Contact Symbol',
    colorCode: [
      { wire: 'Terminals 11-12 or 1-2', color: '#EF4444', signal: 'Normally Closed (NC) Safety Cutoff', colorUrdu: 'سرخ نشان', signalUrdu: 'این سی کنٹیکٹ (سیفٹی کٹ آف)' },
      { wire: 'Terminals 13-14 or 3-4', color: '#10B981', signal: 'Normally Open (NO) Signal', colorUrdu: 'سبز نشان', signalUrdu: 'این او کنٹیکٹ (سگنل دینے کیلئے)' },
      { wire: 'Ground Screw', color: '#FBBF24', signal: 'PE Earth Casing Bond', colorUrdu: 'ارتھ', signalUrdu: 'باڈی ارتھ' },
    ],
    workingPrinciple: 'Heavy-duty mechanical switch enclosed in cast aluminum or IP67 thermoplastic housing. Actuated physically by machinery movement via rotary roller lever, adjustable rod, or spring plunger. Contains snap-action silver alloy double-break contacts with positive opening safety operation.',
    workingPrincipleUrdu: 'ہیوی ڈیوٹی کاسٹ ایلومینیم باڈی والا سوئچ جو مشین کے کسی حصے (جیسے کرین، لفٹ یا سلنڈر) کے ٹکرانے سے آن آف ہوتا ہے۔ اس میں ایک این او (NO) اور ایک این سی (NC) پوائنٹ ہوتا ہے۔',
    testingMethod: [
      '1. Disconnect power and open the terminal cover.',
      '2. Set multimeter to Continuity / Beeper mode (Ω).',
      '3. Probe terminals 11-12 (NC): Meter must BEEP continuously with 0.1Ω. When lever is pushed, beep must stop instantly.',
      '4. Probe terminals 13-14 (NO): Meter must show OPEN (OL). When lever is pushed, meter must BEEP with 0.1Ω.',
      '5. Check internal return spring for fatigue; arm must snap back vigorously without sticking.',
    ],
    testingMethodUrdu: [
      '1. سپلائی بند کر کے ڈھکن کھولیں۔',
      '2. ملٹی میٹر کو بیپ (کنٹینیوٹی) پر رکھیں۔',
      '3. این سی (11-12) پر دونوں پروب لگائیں: بیپ بولنی چاہیے۔ لیور کو ہاتھ سے دبانے پر بیپ فوراً بند ہونی چاہیے۔',
      '4. این او (13-14) پر دونوں پروب لگائیں: کچھ نہیں بولنا چاہیے۔ لیور دبانے پر بیپ بولنی چاہیے۔',
      '5. اندر کی اسپرنگ چیک کریں کہ واپس فوراً پلٹتی ہے یا جام ہے۔',
    ],
    applications: ['Overhead crane long-travel limits', 'Elevator floor stopping', 'CNC door interlock'],
    applicationsUrdu: ['اوور ہیڈ کرین کی آخری حد', 'لفٹ کا منزل پر رکنا', 'سی این سی مشین سیفٹی ڈور'],
    diagramType: 'limit_switch',
  },

  // 5. Danfoss Pressure Switch (KP35 / KP5)
  {
    id: 'danfoss-pressure-switch',
    title: 'Danfoss Pressure Switch (KP35 / KP5) Wiring & Testing',
    titleUrdu: 'ڈنفس پریشر سوئچ (KP35 / KP5) وائرنگ، سیٹنگ اور ٹیسٹنگ',
    type: 'pressure_switch',
    symbolName: 'Pressure Actuated SPDT Switch',
    colorCode: [
      { wire: 'Terminal 1', color: '#E8A85C', signal: 'Common Line In', colorUrdu: 'براؤن / فیز', signalUrdu: 'مین کامن سپلائی ان پٹ' },
      { wire: 'Terminal 2', color: '#10B981', signal: 'Closes on Pressure Fall (Low Cut)', colorUrdu: 'سبز / نیلا', signalUrdu: 'پریشر کم ہونے پر آن ہوتا ہے' },
      { wire: 'Terminal 4', color: '#EF4444', signal: 'Closes on Pressure Rise (High Cut)', colorUrdu: 'سرخ', signalUrdu: 'پریشر زیادہ ہونے پر آن ہوتا ہے' },
    ],
    workingPrinciple: `Danfoss KP35 is used for water systems, boilers, air compressors, and refrigeration.
- Left Scale: Main Range Setting (Cut-out or cut-in pressure in Bar/Psi).
- Right Scale: Differential Setting (DIFF in Bar).
Cut-in Pressure = Range Value - Differential Value.
Example: Set Range at 4 Bar and DIFF at 1 Bar. The pump cuts OUT at 4 Bar and cuts IN at 3 Bar (4 - 1 = 3 Bar).`,
    workingPrincipleUrdu: `ڈنفس KP35 واٹر پمپ، بوائلر، ائیر کمپریسر اور چلرز میں پریشر کنٹرول کرنے والا مشہور ترین سوئچ ہے۔
- بائیں طرف کی اسکیل: مین پریشر کی حد (Bar)
- دائیں طرف کی اسکیل: ڈیفرینشل (فرق)

مثال کے طور پر: اگر مین اسکیل 4 بار پر ہو اور ڈیفرینشل 1 بار پر ہو، تو پریشر 4 بار پہنچنے پر پمپ بند ہو جائے گا اور پریشر گر کر 3 بار پر آتے ہی دوبارہ پمپ خودکار چل پڑے گا۔`,
    testingMethod: [
      '1. Connect multimeter on continuity between terminals 1 and 2.',
      '2. With zero air/water pressure in system, 1-2 must be closed (Beeping).',
      '3. Use hand test lever under the case to push bellows upward: switch must click and 1-2 will open while 1-4 closes.',
      '4. Check for gas or water weeping at the 1/4" BSP male threaded brass connector.',
    ],
    testingMethodUrdu: [
      '1. ملٹی میٹر کو ٹرمینل 1 اور 2 پر کنٹینیوٹی پر لگائیں۔',
      '2. خالی ٹینک میں 1 اور 2 ملے ہونے چاہئیں (بیپ بجے گی)۔',
      '3. نیچے لگی مینوئل پتی کو اسکرو ڈرائیور سے اوپر دبائیں: کلک کی آواز کے ساتھ 1-2 کٹ جائے گا اور 1-4 مل جائے گا۔',
      '4. پائپ کی چوڑی پر ٹیفلان ٹیپ چیک کریں تاکہ لیکج نہ ہو۔',
    ],
    applications: ['Hydro-pneumatic booster pump water sets', 'Air compressor motor start/stop', 'Chiller flow cutout'],
    applicationsUrdu: ['بوسٹر واٹر پمپ آٹومیشن', 'ائیر کمپریسر آٹو کٹ', 'چیلر ہائی/لو پریشر ٹرپ'],
    diagramType: 'danfoss_kp35',
  },
];
