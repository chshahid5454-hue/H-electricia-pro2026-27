import { ComponentItem } from '../types';

export const COMPONENTS_DATA: ComponentItem[] = [
  // 1. MCB
  {
    id: 'mcb',
    name: 'MCB (Miniature Circuit Breaker)',
    nameUrdu: 'ایم سی بی (منی ایچر سرکٹ بریکر)',
    symbol: 'Thermal-Magnetic Overcurrent Trip Symbol',
    function: 'Protects electrical wiring and appliances against Overload (bimetallic strip thermal mechanism) and Short-Circuit (electromagnetic solenoid instantaneous trip). Available in B, C, and D trip curves.',
    functionUrdu: 'تاروں اور آلات کو اوور لوڈ (زیادہ کرنٹ) اور شارٹ سرکٹ سے بچانے والا بریکر۔ اس میں بائی میٹالک پتی اور الیکٹرو میگنیٹک کوائل ہوتی ہے۔',
    testingSteps: [
      '1. Visual Inspection: Check toggle switch mechanism for mechanical snap action. Should not feel sloppy or stuck.',
      '2. Continuity Test (OFF State): Place multimeter probes across Line and Load terminals with toggle down. Meter must read Open Loop (OL).',
      '3. Continuity Test (ON State): Flip toggle up. Meter must beep with resistance < 0.1 Ω across contact pairs.',
      '4. Insulation Resistance: Megger between adjacent poles or pole to DIN-rail ground (> 10 MΩ at 500V DC).',
    ],
    testingStepsUrdu: [
      '1. سوئچ کو اوپر نیچے کر کے چیک کریں کہ اسپرنگ صحیح کلک کرتا ہے یا ڈھیلا ہے۔',
      '2. بریکر بند (OFF) حالت میں دونوں ٹرمینلز پر میٹر بیپ نہیں بولنی چاہیے (اوپن سرکٹ)۔',
      '3. بریکر آن (ON) حالت میں دونوں ٹرمینلز کے درمیان مزاحمت 0.1 اوہم سے کم ہونی چاہیے اور میٹر بیپ بولے گا۔',
      '4. اگر آن کرنے پر بھی بیپ نہ بولے تو اندر کا پاترا جل چکا ہے۔',
    ],
    commonFaults: ['Internal contact arcing/welding', 'Nuisance thermal tripping due to loose terminal screw overheating'],
    commonFaultsUrdu: ['اندرونی پوائنٹس کا سپارک ہو کر جل جانا', 'تار ڈھیلی ہونے کی وجہ سے ٹرمینل گرم ہو کر بار بار ٹرپ ہونا'],
    priceRangePKR: 'PKR 450 - 1,200 (Single Pole) | PKR 1,800 - 4,500 (3-Pole 63A)',
    priceNoteUrdu: 'سنگل پول 450 سے 1200 روپے (Schneider / Terasaki / Hager / Chint)',
    specifications: [
      { key: 'Breaking Capacity (Icu)', value: '6kA or 10kA', keyUrdu: 'بریکنگ کیپیسٹی' },
      { key: 'Trip Curve Types', value: 'B (3-5x In), C (5-10x In), D (10-20x In)', keyUrdu: 'ٹرپ کروز (B, C, D)' },
      { key: 'Standard Ratings', value: '6A, 10A, 16A, 20A, 25A, 32A, 40A, 63A', keyUrdu: 'ایمپئر رینج' },
    ],
    graphicType: 'mcb',
  },

  // 2. MCCB
  {
    id: 'mccb',
    name: 'MCCB (Molded Case Circuit Breaker)',
    nameUrdu: 'ایم سی سی بی (مولڈڈ کیس سرکٹ بریکر)',
    symbol: 'Heavy Industrial Adjustable Circuit Breaker Symbol',
    function: 'Heavy-duty industrial circuit breaker for higher currents (63A to 1600A) and higher breaking capacities (25kA to 70kA). Features adjustable thermal trip current (0.7 to 1.0x In) and magnetic short-circuit dial.',
    functionUrdu: 'بڑی موٹروں اور فیکٹری کے مین پینل کا بریکر (63A سے 1600A)۔ اس میں کرنٹ کی سیٹنگ کم زیادہ کرنے والا ڈائل ہوتا ہے۔',
    testingSteps: [
      '1. Push the physical "PUSH TO TRIP" test button with a small screwdriver. The toggle handle must jump to the middle TRIP position immediately.',
      '2. Reset test: Push handle all the way down to OFF until it latches, then push up to ON.',
      '3. Resistance balance test: Measure micro-ohms across all 3 poles in ON state. All 3 phases should have nearly identical resistance (< 0.05 Ω).',
    ],
    testingStepsUrdu: [
      '1. اس کے اوپر بنے پیلے یا سرخ "PUSH TO TRIP" بٹن کو پیچ کس سے دبائیں۔ ہینڈل فوراً درمیان میں آ کر ٹرپ ہونا چاہیے۔',
      '2. ری سیٹ کرنے کیلئے ہینڈل کو پہلے نیچے فل بند کریں، پھر اوپر آن کریں۔',
      '3. تینوں فیزز کے کنٹیکٹس کی مزاحمت میٹر سے چیک کریں۔',
    ],
    commonFaults: ['Trip mechanism jam from carbon dust', 'Single phasing due to burned pole contact on phase 2 or 3'],
    commonFaultsUrdu: ['مکینزم کا جام ہو جانا', 'تھری فیز میں سے ایک فیز کا پاترا جل جانا جس سے موٹر دو فیز پر چل کر جل جاتی ہے'],
    priceRangePKR: 'PKR 8,500 - 45,000 (100A to 630A)',
    priceNoteUrdu: '100 ایمپئر سے 400 ایمپئر: 8,500 سے 45,000 روپے (Mitsubishi, Terasaki, Schneider)',
    specifications: [
      { key: 'Current Range', value: '63A to 1600A', keyUrdu: 'کرنٹ رینج' },
      { key: 'Breaking Capacity', value: '25kA - 50kA', keyUrdu: 'شارٹ سرکٹ کیپیسٹی' },
    ],
    graphicType: 'mccb',
  },

  // 3. RCCB / ELCB
  {
    id: 'rccb',
    name: 'RCCB / ELCB (Residual Current Circuit Breaker)',
    nameUrdu: 'آر سی سی بی / ای ایل سی بی (ارتھ لیکیج سرکٹ بریکر)',
    symbol: 'Toroidal Core Residual Current Differential Symbol',
    function: 'Life-saving device that detects minute current leakage to earth (30mA for human body shock protection; 300mA for fire prevention). Operates on Kirchhoff Current Law using a Core Balance Current Transformer (CBCT).',
    functionUrdu: 'انسانی جان بچانے والا بریکر۔ اگر کسی انسان کو کرنٹ لگ جائے یا تار باڈی کو ٹچ ہو تو 30 ملی سیکنڈ میں بجلی کاٹ دیتا ہے اور انسان جان لیوا جھٹکے سے محفوظ رہتا ہے۔',
    testingSteps: [
      '1. Monthly User Test: Press the physical "T" (Test) button while powered. It must trip immediately. If it does not trip, the breaker is defective and dangerous.',
      '2. Dedicated RCD Ramp Tester: Connect calibrated RCD tester. 30mA unit must trip between 18mA and 28mA within 40 milliseconds.',
    ],
    testingStepsUrdu: [
      '1. بریکر پر لگے "T" (Test) بٹن کو دبائیں۔ اگر دبانے پر کھٹاک سے ٹرپ نہ ہو تو بریکر خراب ہے، فوری بدلیں۔',
      '2. لیکیج چیک: 30 ملی ایمپئر کے بریکر کو 40 ملی سیکنڈ میں ٹرپ ہونا چاہیے۔',
    ],
    commonFaults: ['Bypassed by untrained electricians because of frequent tripping from neutral-earth leaks', 'Trip spring fatigue'],
    commonFaultsUrdu: ['اناڑی کاریگر لیکیج تلاش کرنے کے بجائے اسے ڈائریکٹ کر دیتے ہیں جو جان لیوا ہے'],
    priceRangePKR: 'PKR 3,500 - 8,500 (2-Pole / 4-Pole 30mA)',
    priceNoteUrdu: '2-پول 3500 سے 5500 روپے | 4-پول 6500 سے 9000 روپے',
    specifications: [
      { key: 'Sensitivity (IΔn)', value: '30 mA (Life safety) / 300 mA (Industrial fire)', keyUrdu: 'لیکیج حساسیت' },
      { key: 'Trip Time', value: '< 40 ms at 5x IΔn', keyUrdu: 'ٹرپ کا وقت' },
    ],
    graphicType: 'rccb',
  },

  // 4. Magnetic Contactor
  {
    id: 'contactor',
    name: 'AC Magnetic Contactor',
    nameUrdu: 'اے سی میگنیٹک کنٹیکٹر',
    symbol: 'Main Power Contacts & Auxiliary NO/NC Symbol',
    function: 'Electrically controlled high-amperage switch used for switching motors, capacitors, and industrial heating elements. Energizing coil A1-A2 pulls armature, closing 3 power contacts (L1-T1, L2-T2, L3-T3) and auxiliary logic contacts (NO 13-14, NC 21-22).',
    functionUrdu: 'بڑی موٹروں کو پش بٹن یا پی ایل سی سے آن کرانے والا میگنیٹک سوئچ۔ جب کوائل کو کرنٹ ملتا ہے تو اندر کا میگنیٹ پتھریوں کو کھینچ کر مین کنکشن جوڑ دیتا ہے۔',
    testingSteps: [
      '1. Coil Resistance Test: Measure resistance across A1 and A2 with multimeter. 220V AC coil reads 300Ω to 900Ω depending on size. 0Ω = shorted; OL = open/burned coil.',
      '2. Manual Plunger Test: Push center plunger down with thumb. Mechanism should move smoothly without binding.',
      '3. Contact Continuity: In depressed state, measure resistance across 1-2, 3-4, 5-6 (< 0.1 Ω).',
    ],
    testingStepsUrdu: [
      '1. کوائل ٹیسٹ: ملٹی میٹر کو اوہم پر رکھ کر A1 اور A2 چیک کریں۔ 220V کوائل 300 سے 800 اوہم بتاتی ہے۔ اگر OL ہو تو کوائل جل چکی ہے۔',
      '2. انگوٹھے سے کنٹیکٹر کو اندر دبائیں اور چیک کریں کہ نرمی سے دبتا ہے یا پھنستا ہے۔',
      '3. دبا کر 1-2، 3-4 اور 5-6 کا پاترا چیک کریں۔',
    ],
    commonFaults: ['Chattering / Humming noise due to broken shading ring or dust on core face', 'Contact tips pitted/burned'],
    commonFaultsUrdu: ['شور اور گنگناہٹ (شیڈنگ رنگ ٹوٹنے یا کور پر مٹی جمنے سے)', 'پوائنٹس جل کر ویلڈ ہو جانا'],
    priceRangePKR: 'PKR 2,800 - 18,000 (9A to 150A Schneider / Fuji / LS / Chint)',
    priceNoteUrdu: '9A سے 32A: 2,800 سے 6,500 روپے | 50A سے 150A: 10,000 سے 22,000 روپے',
    specifications: [
      { key: 'Coil Voltages', value: '24V DC, 110V AC, 220V AC, 400V AC', keyUrdu: 'کوائل وولٹیج' },
      { key: 'Duty Categories', value: 'AC-1 (Resistive), AC-3 (Induction Motor), AC-4 (Plugging)', keyUrdu: 'ڈیوٹی کیٹیگری' },
    ],
    graphicType: 'contactor',
  },

  // 5. Industrial 8-Pin / 11-Pin Relay
  {
    id: 'relay',
    name: 'Industrial Plug-In Relay (8-Pin / 11-Pin Octal)',
    nameUrdu: 'انڈسٹریل ریلے (8 پن اور 11 پن بیس والی ریلے)',
    symbol: 'DPDT / 3PDT Electromagnetic Relay Symbol',
    function: 'Interposing and logic control relay used for electrical isolation, multiplying contacts, and converting PLC transistor signals into AC contactor coil triggers.',
    functionUrdu: 'کنٹرول سرکٹ اور سگنل کو الگ رکھنے والی شیشے کی باڈی والی ریلے (Omron / Finder ٹائپ)۔',
    testingSteps: [
      '1. Identify Coil Pins: On standard 8-pin relay, pins 2 and 7 are coil. Measure resistance (24V DC coil ≈ 650Ω; 220V AC coil ≈ 14,000Ω).',
      '2. Identify Contacts: Pin 1 (COM) connects to Pin 4 (NC) and Pin 3 (NO). Pin 8 (COM) connects to Pin 5 (NC) and Pin 6 (NO).',
      '3. Test manual test lever (orange button) to check contact flipping and LED indication.',
    ],
    testingStepsUrdu: [
      '1. 8 پن ریلے کی پن نمبر 2 اور 7 کوائل ہوتی ہیں۔ 24V ڈی سی کوائل کی مزاحمت 650 اوہم ہوتی ہے۔',
      '2. این او اور این سی پوائنٹس میٹر کی بیپ سے چیک کریں۔',
      '3. اوپر لگے اورینج بٹن کو دبا کر ہاتھ سے ٹیسٹ کریں۔',
    ],
    commonFaults: ['Coil open circuit', 'Oxidized silver contacts causing intermittent high resistance signals'],
    commonFaultsUrdu: ['کوائل کا تار ٹوٹنا', 'پوائنٹس پر کاربن آ جانا جس سے پی ایل سی کو سگنل نہیں ملتا'],
    priceRangePKR: 'PKR 450 - 1,400 (With base socket)',
    priceNoteUrdu: 'بمعہ بیس ساکٹ 450 سے 1400 روپے (Omron / Finder / Schneider)',
    specifications: [
      { key: 'Pin Configurations', value: '8-Pin (DPDT 2 NO/NC), 11-Pin (3PDT 3 NO/NC), 14-Pin (4PDT)', keyUrdu: 'پنوں کی ترتیب' },
      { key: 'Contact Rating', value: '10A at 250V AC / 30V DC', keyUrdu: 'کرنٹ کیپیسٹی' },
    ],
    graphicType: 'relay',
  },

  // 6. Current Transformer (CT)
  {
    id: 'ct-transformer',
    name: 'Current Transformer (CT 50/5A, 100/5A)',
    nameUrdu: 'کرنٹ ٹرانسفارمر (سی ٹی 100/5A, 200/5A)',
    symbol: 'Step-Down Current Transformer Symbol',
    function: 'Steps down dangerous high line currents (e.g. 500A) to safe measurable 5A or 1A level for panel ammeters, APFC relays, and energy meters.',
    functionUrdu: 'تار یا بس بار کے زیادہ کرنٹ (مثلاً 500 ایمپئر) کو کم کر کے 5 ایمپئر بنا کر میٹر اور ریلے کو دینے والا کوائل ٹرانسفارمر۔',
    testingSteps: [
      '1. Ratio Test: Feed known current through center window (P1 to P2) and measure secondary output on S1-S2 with clamp meter.',
      '2. Secondary Winding Continuity: Measure resistance across S1 and S2 (< 2 Ω).',
      '3. FATAL SAFETY WARNING: NEVER open-circuit a live CT secondary! An open-circuit secondary induces kilovolts of lethal voltage that explodes the CT and electrocutes the electrician. Always short S1-S2 before disconnecting ammeter!',
    ],
    testingStepsUrdu: [
      '1. سینٹر میں سے تار گزار کر سیکنڈری S1 اور S2 پر ایمپئر چیک کریں۔',
      '2. S1 اور S2 کے درمیان اوہم چیک کریں (2 اوہم سے کم ہونی چاہیے)۔',
      '3. جان لیوا خطرہ: چلتی ہوئی سی ٹی کے S1 اور S2 کو کبھی کھلا مت چھوڑیں! ورنہ ہزاروں وولٹ پیدا ہو کر سی ٹی پھٹ جائے گی۔ ایمپئر میٹر کھولنے سے پہلے S1 اور S2 کو آپس میں شارٹ کریں۔',
    ],
    commonFaults: ['Core saturation from harmonic currents', 'Terminal burnt from loose secondary screw'],
    commonFaultsUrdu: ['کور کا گرم ہو جانا', 'سیکنڈری تار لوز ہونے سے جل جانا'],
    priceRangePKR: 'PKR 850 - 3,200 (Class 0.5 / Class 1.0)',
    priceNoteUrdu: '850 سے 3200 روپے فی عدد (50/5A سے 1000/5A)',
    specifications: [
      { key: 'Secondary Ratings', value: '5A (standard) or 1A', keyUrdu: 'سیکنڈری کرنٹ' },
      { key: 'Accuracy Classes', value: 'Class 0.2 (Metering), Class 0.5, 5P10 / 10P10 (Protection)', keyUrdu: 'درستگی کا درجہ' },
    ],
    graphicType: 'ct',
  },
];
