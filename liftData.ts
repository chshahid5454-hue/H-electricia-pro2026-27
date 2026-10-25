import { LiftTopic } from '../types';

export const LIFT_TOPICS_DATA: LiftTopic[] = [
  // 1. Lift Control Panel Architecture
  {
    id: 'lift-control-panel-arch',
    title: 'Passenger Elevator Control Panel Architecture & Safety Chain',
    titleUrdu: 'مسافر لفٹ کنٹرول پینل آرکیٹیکچر اور سیفٹی چین',
    category: 'control_panel',
    description: `Elevator Control Panel Architecture:
1. Microprocessor Master Controller (e.g. Monarch NICE3000+, Step, or Arkel): Manages calls, door sequencing, floor position, and speed curve.
2. Integrated Variable Voltage Variable Frequency (VVVF) Drive: Controls synchronous gearless or induction traction motor with S-curve acceleration.
3. 110V AC / 230V AC Safety Chain Circuit (Series Circuit):
   - Machine room stop switch -> Pit stop switch -> Car top inspection stop -> Governor overspeed switch -> Final upper/lower limit switches -> Car safety gear switch -> Landing door interlocks -> Car door interlock switch.
   - GOLDEN ELEVATOR RULE: If ANY single contact in this safety chain opens, the main contactor drops instantly and mechanical brakes drop on the motor shaft, preventing elevator movement.`,
    descriptionUrdu: `لفٹ کنٹرول پینل اور سیفٹی چین سرکٹ:
1. مین مائیکرو پروسیسر بورڈ (Monarch NICE3000+ وغیرہ) جو کالز، دروازے اور سپیڈ کو کنٹرول کرتا ہے۔
2. انٹیگریٹڈ VVVF انورٹر ڈرائیو جو لفٹ کو بغیر جھٹکے کے اسموتھ چلاتی ہے۔
3. سیفٹی چین (سیریز سرکٹ):
   - اوور اسپیڈ گورنر سوئچ -> پٹ ایمرجنسی سوئچ -> چھت کا انسپکشن سوئچ -> تمام منزلوں کے دروازوں کے لاک سوئچ -> کیبن ڈور لاک سوئچ۔
   - اصول: اس سیریز سرکٹ کا ایک بھی سوئچ کھلا ہو تو لفٹ ایک انچ بھی حرکت نہیں کرے گی تاکہ کوئی حادثہ نہ ہو۔`,
    diagramType: 'lift_panel',
  },

  // 2. ARD System (Automatic Rescue Device)
  {
    id: 'lift-ard-system',
    title: 'Automatic Rescue Device (ARD) Emergency Battery Operation',
    titleUrdu: 'آٹومیٹک ریسکیو ڈیوائس (ARD) ایمرجنسی بیٹری آپریشن',
    category: 'ard',
    description: `What happens when WAPDA power fails while passengers are inside the elevator cabin?
The Automatic Rescue Device (ARD) takes over:
1. ARD senses loss of 3-phase grid power and waits 3-5 seconds to confirm blackout.
2. Inverter energizes using internal battery bank (typically 4x or 5x 12V 7Ah lead-acid batteries = 48V-60V DC).
3. ARD releases the mechanical motor brake.
4. "Light Load Direction Search": The controller checks motor current in both UP and DOWN directions. Whichever direction requires LESS torque (moving with counterweight gravity) is selected!
5. Cabin glides slowly to the nearest floor leveling zone at rescue speed (~0.1 m/s).
6. Cabin floor level optical sensor activates door operator, doors open completely, passenger voice synthesizer announces "Rescue complete, please exit safely", and doors remain open.`,
    descriptionUrdu: `واپڈا کی بجلی بند ہونے پر لفٹ میں پھنسے لوگوں کو نکالنے کا نظام (ARD):
1. جیسے ہی بجلی جاتی ہے ARD 5 سیکنڈ میں خودکار آن ہو جاتا ہے۔
2. بیٹری بینک (48V یا 60V) سے انورٹر چلتا ہے۔
3. ARD لفٹ کی بریک کھول کر چیک کرتا ہے کہ کیبن کو اوپر لے جانا آسان ہے یا نیچے (جدھر کاؤنٹر ویٹ مدد کرے)۔
4. لفٹ نہایت سست رفتار سے قریبی منزل کے بالکل برابر آ کر رک جاتی ہے۔
5. لفٹ کا دروازہ خودکار کھل جاتا ہے اور آواز آتی ہے کہ باہر تشریف لائیں!`,
    diagramType: 'ard_system',
  },

  // 3. VVVF Door Operator
  {
    id: 'lift-door-operator',
    title: 'VVVF Door Operator Drive & Safety Light Curtain',
    titleUrdu: 'ڈور آپریٹر انورٹر اور انفراریڈ سیفٹی پردہ (Light Curtain)',
    category: 'door_operator',
    description: `Modern car top door operators use a dedicated mini-inverter drive with permanent magnet synchronous motor (PMSM):
- Smooth variable speed profile: Fast opening -> Slow cushioning to prevent banging.
- Infrared Safety Light Curtain: Matrix of 16 to 128 invisible infrared beams across the door entrance. If any person, child, or object obstructs a beam, the door reopens instantly without touching.
- Torque Limit Auto-Reverse: If the mechanical door encounters resistance exceeding 150N (e.g. hand or luggage trapped), motor current spikes and controller reverses door immediately.`,
    descriptionUrdu: `لفٹ ڈور آپریٹر اور انفراریڈ سیفٹی پردہ:
کیبن کی چھت پر لگا چھوٹا انورٹر دروازے کو تیز کھولنے اور بند ہونے پر نرمی سے روکنے کا کام کرتا ہے۔
دروازے کے دونوں کناروں پر انفراریڈ شعاعوں کا پردہ (Light Curtain) لگا ہوتا ہے۔ اگر کوئی بچہ یا چیز آگے آئے تو دروازہ چھوئے بغیر فوراً الٹا کھل جاتا ہے۔`,
    diagramType: 'door_vvvf',
  },

  // 4. Brake System Wiring & Rotary Encoder
  {
    id: 'lift-brake-encoder',
    title: 'Electromechanical Brake Circuit & Rotary Encoder Leveling',
    titleUrdu: 'الیکٹرو مکینکل بریک کوائل وائرنگ اور انکوڈر فلور لیولنگ',
    category: 'brake',
    description: `Brake System Wiring:
- Traction machine disc or drum brake operates in "Fail-Safe De-Energized" state: heavy mechanical springs force brake shoes clamped tight when power is OFF.
- To release brake and allow motor to spin, brake coil receives high DC voltage pulse (e.g. 110V/220V DC) for pickup, then drops to lower holding voltage (e.g. 60V DC) to prevent coil overheating.
- Microswitches on brake arms provide closed feedback to PLC/drive confirming brake has physically opened.

Rotary Encoder (Speed & Floor Leveling):
- Incremental optical encoder (typically 1024 or 2048 pulses per revolution, Line Driver UVW / ABZ) mounted on traction motor shaft.
- Provides millisecond pulse feedback to drive for zero-speed holding torque and mm-accurate floor leveling flush with hallway sill.`,
    descriptionUrdu: `لفٹ کی بریک اور روٹری انکوڈر:
لفٹ کی بریک اسپرنگ سے جکڑی رہتی ہے۔ جب لفٹ نے چلنا ہوتا ہے تو بریک کوائل کو 110V یا 220V ڈی سی کرنٹ دیا جاتا ہے جس سے میگنیٹ بن کر بریک کے پیڈ کھل جاتے ہیں۔
موٹر کے پیچھے لگا 1024 پلس والا انکوڈر ہر ایک ملی میٹر کی گنتی رکھتا ہے تاکہ لفٹ منزل کے فرش کے بالکل برابر آ کر رکے۔`,
    diagramType: 'brake_circuit',
  },
];
