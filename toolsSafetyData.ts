import { ToolSafetyTopic } from '../types';

export const TOOLS_SAFETY_DATA: ToolSafetyTopic[] = [
  // 1. Electrician Essential Testing Instruments
  {
    id: 'essential-tools',
    title: 'Essential Testing Instruments (Clamp Meter, Megger, Earth Tester)',
    titleUrdu: 'الیکٹریشن کے لازمی آلات (کلیمپ میٹر، میگر، ارتھ ٹیسٹر، ٹیسٹر)',
    category: 'tools',
    description: `Professional instruments required for industrial maintenance:
1. True-RMS Digital Clamp Meter (e.g. Fluke 376 / Uni-T UT204+):
   - Measures AC/DC current non-intrusively up to 1000A without cutting cables.
   - Inrush Current function: Captures motor starting spike (100ms inrush).
   - Frequency (Hz) and true AC voltage.

2. Megohmmeter (Megger / Insulation Resistance Tester):
   - Injects high DC test voltages (250V, 500V, 1000V) to stress wire insulation.
   - Pass Criteria: Insulation resistance must be greater than 1 Megaohm (> 1 MΩ) per 1000V operating voltage. Motor reading below 0.5 MΩ indicates wet or failing winding.

3. Digital Earth Resistance Tester (Fall of Potential 3-Wire):
   - Uses 3 stakes: E (Earth pit under test), P (Potential spike at 62% distance), C (Current spike at 100% distance - 20 meters away).
   - Test current eliminates soil DC stray voltages.

4. Non-Contact & Neon Phase Voltage Testers:
   - Always verify on a known live source before and after testing dead circuits (Prove-Dead rule).`,
    descriptionUrdu: `انڈسٹریل الیکٹریشن کے اہم ترین آلات:
1. ٹرو آر ایم ایس ڈیجیٹل کلیمپ میٹر: بغیر تار کاٹے موٹر کے ایمپئر، ان رش جھٹکا کرنٹ، وولٹیج اور فریکوئنسی چیک کرنا۔
2. میگر (انسولیشن ٹیسٹر): 500V یا 1000V ڈی سی پیدا کر کے تار اور موٹر وائنڈنگ کی لیکیج چیک کرنا۔ 1 میگا اوہم سے کم ہو تو وائنڈنگ لیک ہے۔
3. ڈیجیٹل ارتھ ٹیسٹر: زمین میں دو کھوٹیاں (20 میٹر فاصلے پر) لگا کر ارتھنگ کے اوہم درست ناپنا۔
4. ٹیسٹر: ہمیشہ پہلے چلتی لائٹ پر چیک کریں تاکہ یقین ہو جائے کہ ٹیسٹر کام کر رہا ہے۔`,
    steps: [
      'Megger Testing Safety: Ensure equipment is completely disconnected from power grid and discharged before attaching Megger clips.',
      'Clamp Meter Tip: Clamp around only ONE conductor (Phase). Clamping both Phase and Neutral cancels magnetic fields, showing 0 Amps!',
    ],
    stepsUrdu: [
      'میگر ٹیسٹ کی سیفٹی: موٹر کے پینل کی سپلائی مکمل بند کر کے میگر لگائیں ورنہ الیکٹرانکس جل جائے گی۔',
      'کلیمپ میٹر کا نکتہ: کلیمپ کو صرف ایک تار (فیز) کے گرد ڈالیں، فیز اور نیوٹرل دونوں ڈالنے پر زیرو ایمپئر آئے گا۔',
    ],
    diagramType: 'electrician_tools',
  },

  // 2. 10 Golden Safety Rules for Electricians
  {
    id: 'ten-safety-rules',
    title: 'The 10 Golden Safety Rules for Electricians',
    titleUrdu: 'الیکٹریشن کے 10 سنہری سیفٹی اصول (جان سب سے قیمتی ہے)',
    category: 'safety_rules',
    description: `Life-saving electrical safety commandments:
1. Treat every wire as LIVE until physically proven dead with a calibrated meter.
2. Lockout / Tagout (LOTO): Place physical padlock and "DANGER - DO NOT OPERATE" tag on breaker before servicing.
3. Test Before Touch: Always verify test instrument on known live circuit, then test work circuit, then re-verify instrument.
4. One-Hand Rule: When working near live equipment, keep one hand in your pocket or behind your back to prevent a cross-chest current path through the heart.
5. Discharge Capacitors: Bleed and short power factor capacitors and DC bus VFD capacitors with a 1kΩ resistor stick before touching.
6. Never wear metal rings, metal watches, or gold chains that cause flash burns.
7. Use 1000V VDE insulated hand tools with intact rubber handles.
8. Wear safety glasses / face shield against arc-flash explosions.
9. Keep work area dry; never work on live circuits standing in water or on damp concrete.
10. Never work alone on high voltage (400V / 11kV) systems.`,
    descriptionUrdu: `الیکٹریشن کی حفاظت کے 10 سنہری اصول:
1. ہر تار کو زندہ (کرنٹ والی) سمجھیں جب تک میٹر سے زیرو نہ دیکھ لیں۔
2. لاگ آؤٹ ٹیگ آؤٹ (LOTO): کام شروع کرنے سے پہلے بریکر پر اپنا تالا لگائیں تاکہ کوئی دوسرا انجانے میں بٹن آن نہ کر دے۔
3. ایک ہاتھ کا اصول: چلتے پینل میں ایک ہاتھ جیب میں رکھیں تاکہ کرنٹ ایک ہاتھ سے دوسرے ہاتھ میں دل سے ہو کر نہ گزرے۔
4. میٹل کی گھڑی، کڑا یا انگوٹھی پہن کر بجلی کا کام مت کریں۔
5. کپیسیٹر اور وی ایف ڈی بند کرنے کے بعد 5 منٹ انتظار کریں اور ریزسٹر سے ڈسچارج کریں۔
6. 1000V انسولیٹڈ پلاسٹک کوٹنگ والے اوزار استعمال کریں۔
7. آنکھوں پر سیفٹی چشمہ پہنیں تاکہ سپارک سے آنکھیں محفوظ رہیں۔
8. گیلے فرش یا پانی میں کھڑے ہو کر کبھی کام نہ کریں۔
9. تنہا کام نہ کریں، ہائی وولٹیج پر ہمیشہ ایک ساتھی پاس رکھیں۔
10. ڈائریکٹ بائی پاس فیوز کبھی نہ لگائیں۔`,
    diagramType: 'ten_safety_rules',
  },

  // 3. Electric Shock Emergency Treatment & CPR (1122 Pakistan Protocol)
  {
    id: 'shock-cpr-treatment',
    title: 'Electric Shock Emergency First Aid & CPR Protocol (Rescue 1122)',
    titleUrdu: 'کرنٹ لگنے پر ہنگامی فرسٹ ایڈ اور سی پی آر (CPR) کا طریقہ',
    category: 'shock_treatment',
    description: `Immediate Step-by-Step Response when a person is experiencing electric shock:

STEP 1: SEVER THE POWER SOURCE IMMEDIATELY
- Do NOT touch the victim directly with bare hands while they are in contact with the live conductor!
- Switch OFF main circuit breaker or unplug equipment immediately.
- If switch is not reachable, use a dry non-conductive object (dry wooden broomstick, dry PVC pipe, dry rope) to push or pull the victim free. Stand on a dry rubber mat or wooden board.

STEP 2: CALL EMERGENCY SERVICES
- In Pakistan, immediately dial Rescue 1122 or Edhi 115.

STEP 3: CHECK RESPONSIVENESS & AIRWAY
- Tap shoulders and shout: "Are you okay?".
- Tilt head gently backward and lift chin to open airway.
- Look, listen, and feel for breathing for no more than 10 seconds.

STEP 4: CARDIOPULMONARY RESUSCITATION (CPR)
- If victim is not breathing or only gasping:
- Place heel of one hand in the center of the chest (lower half of sternum), interlock fingers of other hand.
- Keep arms straight and push hard and fast: 100 to 120 compressions per minute to a depth of 2 inches (5 cm).
- Ratio: 30 chest compressions followed by 2 gentle rescue breaths (or continuous Hands-Only CPR if untrained).
- Continue CPR until emergency paramedics arrive or victim begins breathing.

STEP 5: TREAT BURNS & RECOVERY POSITION
- If breathing, place in Recovery Position on their side.
- Cover electrical entry and exit burn wounds with clean, dry cloth. Never apply oil, ghee, toothpaste, or burst blisters!`,
    descriptionUrdu: `کرنٹ لگنے کی صورت میں فوری بچاؤ کے 5 مراحل:

پہلا مرحلہ: کرنٹ کا رابطہ کاٹیں
- خبردار: شکار کو اپنے ننگے ہاتھوں سے مت چھوئیں۔ فوراً مین بریکر بند کریں۔
- اگر بریکر دور ہو تو خشک لکڑی کے ڈنڈے، خشک پلاسٹک پائپ یا سوکھی رسی سے مریض کو تار سے الگ کریں۔

دوسرا مرحلہ: ریسکیو 1122 کو کال کریں
- فوری طور پر 1122 ملا کر مقام اور مریض کی حالت بتائیں۔

تیسرا اور چوتھا مرحلہ: سی پی آر (CPR) کا طریقہ
- اگر سانس بند ہو اور نبض نہ مل رہی ہو تو بغیر وقت ضائع کیے سی پی آر شروع کریں:
- دونوں ہاتھ مریض کے سینے کے بالکل درمیان (پسلیوں کے بیچ) رکھیں۔
- اپنے بازو سیدھے رکھ کر وزن کے ساتھ سینے کو 2 انچ نیچے دبائیں۔
- رفتار: ایک منٹ میں 100 سے 120 بار دبائیں (30 بار دبائیں اور 2 بار منہ سے سانس دیں)۔
- جب تک 1122 کی ایمبولینس نہ پہنچے یا مریض سانس نہ لینے لگے، سینہ دبانا بند مت کریں!

پانچواں مرحلہ: جلے ہوئے زخم کا علاج
- جلی ہوئی جگہ پر گھی، تیل یا ٹوتھ پیسٹ ہرگز نہ لگائیں۔ صاف کپڑے سے ڈھانپیں۔`,
    diagramType: 'cpr_protocol',
  },

  // 4. Step-by-Step Chemical Earthing Pit Installation
  {
    id: 'chemical-earthing-pit',
    title: 'Step-by-Step Chemical Earthing Pit Installation Guide',
    titleUrdu: 'کیمیکل ارتھنگ پٹ بنانے کا مکمل مرحلہ وار طریقہ',
    category: 'earthing_steps',
    description: `Professional installation of low-resistance chemical earthing pit achieving < 1.0 Ohm resistance:

Step 1: Boring / Excavation
- Bore a 6-inch to 8-inch diameter hole to a depth of 10 to 12 feet (until permanent soil moisture stratum is reached).

Step 2: Earth Electrode Selection
- Pure Electrolytic Copper Bonded Rod (99.9% Cu coating > 250 microns, 16mm or 19mm diameter, 10 feet length) with copper pointed driving tip.

Step 3: Chemical Ground Enhancing Compound (Bentonite / Marconite)
- Mix Bentonite clay with water into a thick slurry.
- Place copper rod in center of the hole.
- Pour compound around rod, ensuring full filling without air voids. The compound absorbs moisture from surrounding soil and permanently retains it.

Step 4: Earth Pit Chamber & Heavy Copper Strip
- Terminate top with heavy brass clamp. Connect 25mm × 3mm pure copper strip.
- Install heavy-duty concrete inspection chamber with removable lid.
- Measure final resistance with 3-pin earth tester. Target: < 1Ω for substation/factory, < 3Ω for residential.`,
    descriptionUrdu: `کم ترین مزاحمت (1 اوہم سے کم) والی کیمیکل ارتھنگ بنانے کا طریقہ:

مرحلہ 1: بورنگ
10 سے 12 فٹ گہرا 6 انچ کا سوراخ بور کریں تاکہ زمین کی قدرتی نمی تک پہنچ جائے۔

مرحلہ 2: کاپر راڈ
10 فٹ لمبا 16 ایم ایم موٹا پیور کاپر کوٹڈ راڈ لیں۔

مرحلہ 3: کیمیکل مصالحہ (بینٹونائٹ / چارکول اور نمک)
بینٹونائٹ کیمیکل کو پانی میں گھول کر گاڑھا پیسٹ بنا کر سوراخ میں راڈ کے چاروں طرف بھر دیں۔ یہ کیمیکل زمین کی نمی کو مستقل کھینچ کر رکھتا ہے اور راڈ کو زنگ سے بچاتا ہے۔

مرحلہ 4: پیتل کا کلیمپ اور ٹیسٹنگ
اوپر براس کا ہیوی کلیمپ لگا کر 25mm × 3mm کاپر پٹی ڈی بی تک لے جائیں۔ اوپر سیمنٹ کا چیمبر بنائیں اور ارتھ ٹیسٹر سے چیک کریں۔`,
    diagramType: 'earthing_pit',
  },
];
