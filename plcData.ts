import { PLCTopic } from '../types';

export const PLC_TOPICS_DATA: PLCTopic[] = [
  // 1. Introduction to PLC
  {
    id: 'plc-intro',
    title: 'What is PLC & Architecture (Siemens S7-1200)',
    titleUrdu: 'پی ایل سی کیا ہے اور اس کی اقسام (سیمنز S7-1200)',
    category: 'intro',
    content: `A Programmable Logic Controller (PLC) is an industrial digital computer ruggedized for control of manufacturing processes and machinery.

Siemens SIMATIC S7-1200 Family:
- CPU 1211C: 6 DI, 4 DO, 2 AI (Compact, non-expandable signal boards only)
- CPU 1214C (Most Popular in Pakistan): 14 DI (24V DC), 10 DO (Relay or Transistor), 2 AI (0-10V DC), expandable with up to 8 signal modules.
- CPU 1215C: 14 DI, 10 DO, 2 AI, 2 AO (4-20mA / 0-10V built-in), dual PROFINET Ethernet ports.

Types of Output Cards:
1. Relay Output (e.g., 1214C DC/DC/RLY): Mechanical dry contacts. Supports up to 250V AC / 30V DC, 2 Amperes. Best for driving AC contactor coils directly. Max switching speed ~1 Hz.
2. Transistor Output (e.g., 1214C DC/DC/DC): Solid-state 24V DC sourcing (PNP). High speed (up to 100 kHz PTO for stepper/servo motor pulse train control). Requires external interposing relay for AC loads.`,
    contentUrdu: `پی ایل سی (پروگرام ایبل لاجک کنٹرولر) ایک انڈسٹریل کمپیوٹر ہے جو فیکٹریوں اور مشینوں کو خودکار طریقے سے کنٹرول کرتا ہے۔

سیمنز S7-1200 سیریز کی اقسام:
1. CPU 1214C (پاکستان میں سب سے زیادہ استعمال ہونے والی ماڈل): اس میں 14 ڈیجیٹل ان پٹ (24V DC)، 10 ڈیجیٹل آؤٹ پٹ اور 2 اینالاگ ان پٹ ہوتے ہیں۔
2. ریلے آؤٹ پٹ (DC/DC/RLY): اس کے آؤٹ پٹ پر ریلے کنٹیکٹس ہوتے ہیں جن سے 220V AC کنٹیکٹر کو براہِ راست آن کرایا جا سکتا ہے۔
3. ٹرانزسٹر آؤٹ پٹ (DC/DC/DC): اس سے 24V DC سگنل نکلتا ہے جو سروو موٹر، سٹیپر یا ہائی سپیڈ پلس کیلئے استعمال ہوتا ہے۔`,
    diagramType: 's7_1200_cpu',
    keyPoints: [
      'Operating Voltage: 24V DC or 120/230V AC depending on model (e.g. 1214C AC/DC/RLY accepts 230V mains).',
      'Cycle Scan Time: Reads Inputs -> Executes Logic Program -> Updates Outputs (typically 1-5 milliseconds).',
      'Memory: Non-volatile retentive memory preserves variables during power loss.',
    ],
    keyPointsUrdu: [
      'سپلائی وولٹیج: ماڈل کے مطابق 24V DC یا 220V AC ہوتی ہے۔',
      'اسکین ٹائم: چند ملی سیکنڈ میں تمام ان پٹس چیک کر کے آؤٹ پٹس کو آن آف کرتا ہے۔',
      'پاور جانے پر بھی ڈیٹا میموری میں محفوظ رہتا ہے۔',
    ],
  },

  // 2. Hardware Wiring (24V, Inputs, Outputs)
  {
    id: 'plc-wiring',
    title: 'Siemens S7-1200 Power, Input & Output Wiring',
    titleUrdu: 'سیمنز S7-1200 پاور، ان پٹ اور آؤٹ پٹ وائرنگ',
    category: 'wiring',
    content: `Terminal Connections for Siemens S7-1200 CPU 1214C:

1. Power Supply Terminals:
- L+ (Pin 1) & M (Pin 2): Connect to +24V DC and 0V DC from industrial switch-mode power supply (e.g. SITOP 24V 5A).
- PE: Grounding terminal; connect directly to panel earth bar.

2. Digital Inputs Wiring (Sink / Source):
- Terminal "1M" is the Common reference for Digital Inputs DI a.0 to DI a.7.
- SINKING (NPN Sensors): Connect 1M to +24V DC. Connecting 0V to input I0.0 turns it ON.
- SOURCING (PNP Sensors / Standard Industrial): Connect 1M to 0V (M). Connecting +24V to input I0.0 turns it ON.
- Start Pushbutton (Normally Open - NO): Connect one side to +24V, other side to I0.0.
- Stop Pushbutton (Normally Closed - NC): Connect one side to +24V, other side to I0.1.

3. Digital Outputs Wiring (Relay Version):
- Terminal "1L" is the Common supply for Outputs Q0.0 to Q0.4. Connect 220V AC Live (or +24V DC) to 1L.
- Terminal Q0.0: Connect to Contactor coil terminal A1.
- Contactor coil terminal A2 connects to Neutral (for 220V coil) or 0V (for 24V coil).
- Install an RC Snubber (for AC coil) or Flyback Diode (for DC coil) across A1-A2 to prevent electrical noise from freezing the CPU.`,
    contentUrdu: `سیمنز S7-1200 کی وائرنگ کا مکمل طریقہ:

1. پاور سپلائی:
L+ پر +24V DC اور M پر 0V (گراؤنڈ) لگائیں۔

2. ڈیجیٹل ان پٹ وائرنگ (1M کامن):
انڈسٹری میں 1M کو ہمیشہ 0V کے ساتھ جوڑا جاتا ہے۔
- سٹارٹ پش بٹن (NO): 24V سپلائی بٹن سے گزر کر ان پٹ I0.0 پر جائے گی۔
- اسٹاپ پش بٹن (NC): 24V سپلائی بٹن سے گزر کر ان پٹ I0.1 پر جائے گی (یہ سیفٹی اصول ہے)۔

3. ڈیجیٹل آؤٹ پٹ وائرنگ (ریلے ماڈل):
- ٹرمینل 1L پر 220V فیز لگائیں۔
- آؤٹ پٹ Q0.0 سے تار لے جا کر میگنیٹک کنٹیکٹر کی کوائل A1 پر لگائیں۔
- کنٹیکٹر کی A2 کو نیوٹرل سپلائی دیں۔
- کوائل کے اوپر نائز فلٹر یا RC سنبر لازمی لگائیں تاکہ پی ایل سی ہینگ نہ ہو۔`,
    diagramType: 'input_wiring',
    keyPoints: [
      'Safety Standard: Field Stop pushbuttons must ALWAYS be physical NC contacts wired with continuous current.',
      'Always separate 24V DC signal conduits from 400V AC motor cables by at least 15cm to avoid inductive coupling.',
    ],
    keyPointsUrdu: [
      'سیفٹی اصول: سٹاپ بٹن ہمیشہ این سی (NC) ہونا چاہیے تاکہ تار ٹوٹنے کی صورت میں مشین خود بند ہو جائے۔',
      'پی ایل سی کی 24V سگنل تاریں اور موٹر کی 400V کیبلز کبھی ایک ہی نالی یا ڈکٹ میں نہ ڈالیں۔',
    ],
  },

  // 3. Ladder Logic: Motor ON/OFF with Latching
  {
    id: 'plc-ladder-latch',
    title: 'Ladder Logic 1: Motor ON/OFF with Holding Contact',
    titleUrdu: 'لیڈر پروگرام 1: موٹر آن/آف ہولڈنگ (لیچنگ) سرکٹ',
    category: 'ladder',
    content: `Network 1: Direct-On-Line Motor Control with Seal-In Latch Contact

Rung Structure:
--[ I0.0 Start NO ]------+--[ I0.1 Stop NC ]--[ I0.2 Overload NC ]--( Q0.0 Motor Contactor )--
                         |
--[ Q0.0 Holding Contact]-+

Operation Logic:
1. Pressing the Start button (I0.0) closes the contact, energizing output Q0.0.
2. Contactor Q0.0 energizes and immediately closes its parallel holding contact (Q0.0).
3. When operator releases Start button, current continues flowing through the holding contact.
4. Pressing Stop button (I0.1) or tripping Thermal Overload (I0.2) opens the rung and de-energizes Q0.0.
5. In TIA Portal, note that if the physical Stop button is already an NC contact, you program it as an NO instruction --[ ]-- in ladder logic so that continuous 24V keeps the instruction closed!`,
    contentUrdu: `نیٹ ورک 1: موٹر سٹارٹ / سٹاپ بمعہ ہولڈنگ کنٹیکٹ

لیڈر سرکٹ کی تفصیل:
- ان پٹ I0.0 (سٹارٹ بٹن)
- متوازی میں Q0.0 کا ہولڈنگ کنٹیکٹ (لیچ)
- ان پٹ I0.1 (اسٹاپ بٹن)
- ان پٹ I0.2 (تھرمل اوور لوڈ ریلے ٹرپ)
- آؤٹ پٹ Q0.0 (موٹر کنٹیکٹر کوائل)

کام کرنے کا اصول:
جیسے ہی سٹارٹ پش بٹن دبایا جائے گا، Q0.0 آن ہو جائے گی اور اپنا متوازی کنٹیکٹ بند کر لے گی۔ بٹن چھوڑنے کے باوجود موٹر چلتی رہے گی جب تک سٹاپ پش بٹن نہ دبایا جائے۔`,
    diagramType: 'ladder_latch',
    keyPoints: [
      'Instruction --[ ]-- checks for signal 1 (Closed if +24V present).',
      'Instruction --[/]-- checks for signal 0 (Closed if 0V).',
      'Output Coil --( )-- turns ON when complete path through rung is TRUE.',
    ],
    keyPointsUrdu: [
      'نارمل اوپن کنٹیکٹ --[ ]-- تب کرنٹ پاس کرتا ہے جب 24V موجود ہوں۔',
      'آؤٹ پٹ کوائل --( )-- جب سارا رنگ گرین ہو جائے تو کنٹیکٹر آن ہو جاتا ہے۔',
    ],
  },

  // 4. Ladder Logic: Star Delta Starter with TON Timer
  {
    id: 'plc-star-delta',
    title: 'Ladder Logic 2: Star-Delta Starter with TON Timer',
    titleUrdu: 'لیڈر پروگرام 2: سٹار ڈیلٹا سٹارٹر بمعہ ٹائمر (TON)',
    category: 'ladder',
    content: `Star-Delta PLC Logic using On-Delay Timer (TON):

Hardware Outputs:
- Q0.0: Main Contactor (KM1)
- Q0.1: Star Contactor (KM3)
- Q0.2: Delta Contactor (KM2)

Logic Execution Sequence:
Network 1: Main & Star Contactor Start
When Start (I0.0) is pressed and Stop (I0.1) is healthy:
- Output Q0.0 (Main) energizes and latches.
- Output Q0.1 (Star) energizes through Delta NC contact --[/] Q0.2-- (Interlock).
- Timer TON "T_Star_Delta" starts running with PT = T#6S (6 seconds preset).

Network 2: Star to Delta Transition
- While Timer ET < 6 seconds, Star Q0.1 remains ON.
- At ET = 6 seconds, Timer output Q turns TRUE.
- This immediately cuts Star Q0.1 via timer NC contact.
- A small transition delay (20ms-50ms dead time) is inserted to prevent simultaneous arcing.
- Output Q0.2 (Delta) energizes and latches via its own contact --[ ] Q0.2--.
- Star Q0.1 is permanently locked out through NC contact of Delta.`,
    contentUrdu: `سٹار ڈیلٹا پی ایل سی لاجک (ٹائمر TON کے ساتھ):

آؤٹ پٹس:
- Q0.0: مین کنٹیکٹر
- Q0.1: سٹار کنٹیکٹر
- Q0.2: ڈیلٹا کنٹیکٹر

طریقہ کار:
1. سٹارٹ بٹن دبانے پر مین کنٹیکٹر (Q0.0) اور سٹار کنٹیکٹر (Q0.1) ایک ساتھ آن ہوتے ہیں اور موٹر ہلکے جھٹکے سے گھومنا شروع کرتی ہے۔
2. ٹائمر TON گنتی شروع کرتا ہے (6 سیکنڈ)۔
3. 6 سیکنڈ مکمل ہوتے ہی سٹار کنٹیکٹر کٹ جاتا ہے اور 40 ملی سیکنڈ کے وقفے کے بعد ڈیلٹا کنٹیکٹر (Q0.2) آن ہو کر موٹر کو فل سپیڈ پر لے آتا ہے۔
4. دونوں کنٹیکٹرز میں سافٹ ویئر انٹرلاک لازمی رکھا جاتا ہے تاکہ دونوں کبھی ایک ساتھ آن نہ ہوں۔`,
    diagramType: 'ladder_star_delta',
    keyPoints: [
      'Dead-time delay between Star drop and Delta pickup is vital to avoid dead short-circuit arcing across phases.',
      'Always include both software interlocking in PLC and physical hardware electrical interlocking across contactor coils.',
    ],
    keyPointsUrdu: [
      'سٹار کٹنے اور ڈیلٹا لگنے کے درمیان 40 ملی سیکنڈ کا وقفہ لازمی دیں ورنہ فیز ٹو فیز شارٹ سرکٹ کا خطرہ ہوتا ہے۔',
      'پی ایل سی کے ساتھ ساتھ کنٹیکٹرز کے اوپر بھی فزیکل این سی (NC) انٹرلاک لازمی لگائیں۔',
    ],
  },

  // 5. Ladder Logic: Overhead Tank Level Control
  {
    id: 'plc-tank-level',
    title: 'Ladder Logic 3: Automatic Water Tank Level Control',
    titleUrdu: 'لیڈر پروگرام 3: اوور ہیڈ پانی ٹینک لیول کنٹرول',
    category: 'ladder',
    content: `Automatic pump filling with hysteresis using High and Low level float switches:

Inputs:
- I0.0: Low Level Float Switch (NO contact, closes when water drops below low mark)
- I0.1: High Level Float Switch (NC contact, opens when water reaches full high mark)
- I0.2: Auto / Manual Selector Switch
- I0.3: Pump Dry-Run Protection Sensor (Ground sump water level ok)

Outputs:
- Q0.0: Water Pump Motor Contactor
- Q0.1: High Water Alarm Buzzer
- Q0.2: Dry-Run Sump Empty Warning Light

Logic:
When tank water drops below low limit, I0.0 triggers pump Q0.0 ON. Pump latches through its own contact and keeps filling until High Level Float I0.1 breaks the circuit. If ground sump is empty (I0.3 opens), pump is inhibited to protect pump impeller from burning.`,
    contentUrdu: `پانی کے ٹینک کا مکمل خودکار لیول کنٹرول:

ان پٹس:
- I0.0: نچلی سطح کا فلوٹ سوئچ (پانی کم ہونے پر سگنل دیتا ہے)
- I0.1: اوپری سطح کا فلوٹ سوئچ (ٹینک بھرنے پر بند کرتا ہے)
- I0.3: خشک چلنے سے بچاؤ (Dry Run) ان پٹ

آؤٹ پٹس:
- Q0.0: واٹر پمپ موٹر کنٹیکٹر
- Q0.1: الارم ہوٹر

جیسے ہی پانی نچلی سطح پر آئے گا پمپ خودکار آن ہو جائے گا اور اوپر تک بھرنے پر خود بند ہو جائے گا۔ اگر زمینی ٹینک میں پانی ختم ہو تو پمپ خودکار بند رہے گا تاکہ موٹر جلنے سے محفوظ رہے۔`,
    diagramType: 'ladder_tank',
    keyPoints: [
      'Prevents rapid cycling (hunting) of the pump at boundary water levels.',
      'Includes emergency override manual pushbuttons for maintenance.',
    ],
    keyPointsUrdu: [
      'ہسٹریسس لاجک پمپ کو پانی کے جھکولوں پر بار بار آن آف ہونے سے روکتی ہے۔',
      'ایمرجنسی کیلئے مینوئل آن کا آپشن بھی موجود ہے۔',
    ],
  },

  // 6. TIA Portal Workflow Steps
  {
    id: 'plc-tia-portal',
    title: 'TIA Portal Step-by-Step Programming & Download Guide',
    titleUrdu: 'سیمنز TIA پورٹل: پروجیکٹ بنانا اور ڈاؤن لوڈ کرنے کا طریقہ',
    category: 'tia_portal',
    content: `Step-by-Step Siemens TIA Portal Workflow (V16 / V17 / V18):

Step 1: Create New Project
- Open TIA Portal -> Click "Create new project" -> Enter Project name (e.g. Shahid_StarDelta) -> Click "Create".
- Switch to "Project view" at bottom-left corner.

Step 2: Add CPU & Configure Hardware
- Click "Add new device" -> Select "Controllers" -> "SIMATIC S7-1200" -> "CPU" -> Choose exact part number (e.g. 6ES7 214-1AG40-0XB0 for CPU 1214C DC/DC/DC).
- Set IP Address under PROFINET interface (Default: 192.168.0.1, Subnet: 255.255.255.0).
- Enable "System and Clock memory bits" in CPU properties (Clock_1Hz at M0.5 for blinking lights).

Step 3: Define PLC Tags (Symbolic Names)
- Expand "PLC tags" -> Open "Default tag table".
- Map inputs: "Start_PB" (I0.0), "Stop_PB" (I0.1), "Overload_Trip" (I0.2).
- Map outputs: "Motor_KM1" (Q0.0), "Star_KM3" (Q0.1), "Delta_KM2" (Q0.2).

Step 4: Write Ladder Logic in Main OB1
- Open "Program blocks" -> Double-click "Main [OB1]".
- Drag and drop contacts (--[ ]--, --[/]--, --( )--) from instructions toolbar.
- Insert timers from "Basic instructions" -> "Timer operations" -> "TON".

Step 5: Compile & Simulation (S7-PLCSIM)
- Right click CPU -> "Compile" -> "Software (rebuild all)". Check for 0 errors.
- Click "Start simulation" icon to launch virtual PLC without hardware.

Step 6: Download to Real PLC & Monitor Online
- Connect Ethernet cable (RJ45) from laptop to PLC port.
- Click "Download to device" -> Select PG/PC interface "PN/IE" -> Search for accessible devices -> Click "Load".
- Switch CPU from STOP to RUN mode.
- Click "Monitoring on/off" (Spectacles icon) to see live green rungs and diagnostic status!`,
    contentUrdu: `ٹیا پورٹل (TIA Portal) میں کام کرنے کے 6 آسان مراحل:

مرحلہ 1: نیا پروجیکٹ بنائیں (Create Project)
مرحلہ 2: اپنا پی ایل سی ماڈل منتخب کریں (مثلاً CPU 1214C DC/DC/RLY) اور آئی پی ایڈریس 192.168.0.1 سیٹ کریں۔
مرحلہ 3: ٹیگ ٹیبل میں نام رکھیں (I0.0 کو Start_PB اور Q0.0 کو Motor_Contactor کا نام دیں)۔
مرحلہ 4: مین بلاک OB1 کھول کر ماؤس سے این او/این سی کنٹیکٹ اور ٹائمر رکھ کر لیڈر پروگرام بنائیں۔
مرحلہ 5: پروجیکٹ کو کمپائل کریں اور غلطیاں دور کریں۔
مرحلہ 6: ایتھرنیٹ کیبل سے لیپ ٹاپ پی ایل سی کے ساتھ جوڑیں اور "Download to Device" پر کلک کر کے پروگرام لوڈ کریں۔ عینک والے آئیکن سے لائیو چیک کریں۔`,
    diagramType: 'tia_workflow',
    keyPoints: [
      'Ensure laptop IP address is in the same subnet (e.g. 192.168.0.50).',
      'If PLC enters red "ERROR" state, check Diagnostics Buffer (Ctrl+D) for exact fault message.',
    ],
    keyPointsUrdu: [
      'لیپ ٹاپ کا آئی پی پی ایل سی کی سیریز میں رکھیں (مثلاً 192.168.0.50)۔',
      'اگر پی ایل سی کا ریڈ ERROR لیمپ جلے تو TIA Portal میں Diagnostic Buffer چیک کریں۔',
    ],
  },
];
