import { VFDTopic } from '../types';

export const VFD_TOPICS_DATA: VFDTopic[] = [
  // 1. VFD Working Principle & Power Wiring
  {
    id: 'vfd-power-control-wiring',
    title: 'VFD Working Principle, Power & Control Wiring',
    titleUrdu: 'وی ایف ڈی کا اصول اور پاور و کنٹرول وائرنگ',
    category: 'vfd_wiring',
    description: `A Variable Frequency Drive (VFD / Inverter) controls 3-phase induction motor speed and torque by varying supply frequency and voltage (V/f principle).
Internal Stages:
1. Rectifier Stage: 6-diode full-wave bridge converts 3-phase 400V AC to ~560V DC.
2. DC Bus Stage: High-voltage electrolytic capacitors and choke filter ripple voltage.
3. Inverter Stage: 6 high-speed Insulated Gate Bipolar Transistors (IGBTs) switch DC into 3-phase Pulse Width Modulated (PWM) variable frequency AC (0Hz to 400Hz).

Power Terminals:
- Input Terminals: L1, L2, L3 (or R, S, T) -> Connect to incoming 3-phase breaker.
- Output Terminals: U, V, W -> Connect to 3-phase motor terminals. (NEVER connect AC mains to U, V, W; doing so instantly destroys IGBT modules!).
- DC Bus Terminals: +DC, -DC (or BR) -> For connecting external Dynamic Braking Resistor (DBR) to absorb regenerative motor energy during rapid stopping.
- Ground: PE terminal with dedicated earth wire.`,
    descriptionUrdu: `وی ایف ڈی (انورٹر) تھری فیز موٹر کے چکر (RPM) اور سپیڈ کو فریکوئنسی تبدیل کر کے کنٹرول کرتا ہے۔

اندرونی بناوٹ:
1. ریکٹیفائر: 400V اے سی کو 560V ڈی سی بناتا ہے۔
2. ڈی سی بس: کپیسیٹر وولٹیج کو فلٹر کرتے ہیں۔
3. آئی جی بی ٹی (IGBT): ڈی سی کو دوبارہ متغیر فریکوئنسی (0 سے 50 ہرٹز یا 400 ہرٹز) اے سی میں بدلتے ہیں۔

ٹرمینل کنکشنز:
- ان پٹ: L1, L2, L3 (یا R, S, T) پر مین واپڈا دیں۔
- آؤٹ پٹ: U, V, W موٹر کو جاتی ہے۔ (خبردار: U, V, W پر کبھی واپڈا نہ لگائیں ورنہ انورٹر کا پردہ پھٹ جائے گا!)۔
- بریکنگ ریزسٹر: موٹر کو فوری بریک لگانے کیلئے DBR ریزسٹر لگایا جاتا ہے۔`,
    wiringGuide: [
      'Input Line Choke / Reactor: Recommended to absorb grid spikes and reduce harmonic distortion.',
      'Output Motor Cable: Must be 4-core symmetrical shielded cable (3 Phase + Earth). Screen grounded at VFD side.',
      'Control Cable: 0-10V and 4-20mA signals must use twisted-pair shielded cable to avoid electromagnetic noise.',
    ],
    wiringGuideUrdu: [
      'لائن چووک / ری ایکٹر گرڈ کے جھٹکوں سے انورٹر کو بچاتا ہے۔',
      'موٹر کی تار شیلڈ والی لگائیں اور ارتھ باڈی سے جوڑیں۔',
      'کنٹرول تاریں (سپیڈ پوٹینشومیٹر) ہمیشہ شیلڈ والی لگائیں۔',
    ],
    diagramType: 'vfd_power_control',
  },

  // 2. Danfoss VLT Micro FC51 Parameter List
  {
    id: 'vfd-danfoss-params',
    title: 'Danfoss VLT Micro FC51 Essential Parameters',
    titleUrdu: 'ڈنفس وی ایل ٹی مائیکرو FC51 ضروری پیرامیٹرز لسٹ',
    category: 'danfoss_params',
    description: `Standard commissioning parameters for Danfoss VLT Micro FC51 drives (widely used in Pakistani textile mills, pumps, and packaging machinery).`,
    descriptionUrdu: 'پاکستان کی ٹیکسٹائل ملز اور فیکٹریوں میں ڈنفس FC51 سب سے زیادہ استعمال ہونے والا انورٹر ہے۔ موٹر نیم پلیٹ کے مطابق یہ پیرامیٹرز فیڈ کریں۔',
    parametersTable: [
      { param: '1-20', name: 'Motor Power (kW)', defaultVal: 'Depends on drive', recommended: 'Set from Motor Nameplate', descUrdu: 'موٹر کے کلو واٹ نیم پلیٹ کے مطابق' },
      { param: '1-22', name: 'Motor Voltage (V)', defaultVal: '400 V', recommended: '400 V (Star) / 230 V (Delta)', descUrdu: 'موٹر وولٹیج' },
      { param: '1-23', name: 'Motor Frequency (Hz)', defaultVal: '50 Hz', recommended: '50 Hz', descUrdu: 'بیس فریکوئنسی (50 ہرٹز)' },
      { param: '1-24', name: 'Motor Current (Amps)', defaultVal: 'Depends on drive', recommended: 'Exact FLA from Nameplate', descUrdu: 'موٹر کا فل لوڈ کرنٹ (ایمپئر)' },
      { param: '1-25', name: 'Motor Nominal Speed', defaultVal: '1420 RPM', recommended: 'Set RPM (e.g. 1440 RPM)', descUrdu: 'موٹر کے اصل چکر (RPM)' },
      { param: '1-29', name: 'Automatic Motor Adaptation (AMA)', defaultVal: '0 (Off)', recommended: '1 (Enable Complete AMA)', descUrdu: 'آٹو موٹر ایڈاپٹیشن (موٹر کو چیک کرنا)' },
      { param: '3-02', name: 'Minimum Reference', defaultVal: '0.00 Hz', recommended: '0.00 Hz', descUrdu: 'کم از کم سپیڈ' },
      { param: '3-03', name: 'Maximum Reference', defaultVal: '50.00 Hz', recommended: '50.00 Hz (or 60 Hz)', descUrdu: 'زیادہ سے زیادہ سپیڈ' },
      { param: '3-41', name: 'Ramp 1 Ramp-up Time (Accel)', defaultVal: '3.00 sec', recommended: '5.00 to 10.0 sec', descUrdu: 'سٹارٹنگ ٹائم (سپیڈ پکڑنے کا وقت)' },
      { param: '3-42', name: 'Ramp 1 Ramp-down Time (Decel)', defaultVal: '3.00 sec', recommended: '5.00 to 10.0 sec', descUrdu: 'سٹاپنگ ٹائم (رکنے کا وقت)' },
      { param: '5-10', name: 'Terminal 18 Digital Input', defaultVal: '8 (Start)', recommended: '8 (Start / Run)', descUrdu: 'ٹرمینل 18: سٹارٹ رن سگنل' },
      { param: '5-12', name: 'Terminal 27 Digital Input', defaultVal: '0 (No function)', recommended: '10 (Reversing)', descUrdu: 'ٹرمینل 27: الٹا گھمانے (ریورس) کا سگنل' },
      { param: '6-10', name: 'Terminal 53 Low Voltage', defaultVal: '0.07 V', recommended: '0.00 V', descUrdu: 'اینالاگ وولٹیج منیمم (0V)' },
      { param: '6-11', name: 'Terminal 53 High Voltage', defaultVal: '10.00 V', recommended: '10.00 V', descUrdu: 'اینالاگ وولٹیج میکسیمم (10V)' },
    ],
  },

  // 3. Siemens Sinamics V20 Parameter List
  {
    id: 'vfd-siemens-params',
    title: 'Siemens Sinamics V20 Parameter Setup',
    titleUrdu: 'سیمنز سینامکس V20 پیرامیٹر سیٹنگ',
    category: 'siemens_params',
    description: `Quick commissioning parameters for Siemens Sinamics V20 drive using the built-in Basic Operator Panel (BOP).`,
    descriptionUrdu: 'سیمنز V20 انورٹر کی کوئیک کمیشننگ اور موٹر سیٹنگ کا طریقہ کار۔',
    parametersTable: [
      { param: 'P0010', name: 'Commissioning Parameter', defaultVal: '0', recommended: '1 (Quick Commissioning)', descUrdu: 'کمیشننگ موڈ آن کرنا' },
      { param: 'P0100', name: 'Europe / North America standard', defaultVal: '0', recommended: '0 (50 Hz, kW standard)', descUrdu: '50 ہرٹز کلو واٹ موڈ' },
      { param: 'P0304', name: 'Rated Motor Voltage (V)', defaultVal: '230 V / 400 V', recommended: '400 V', descUrdu: 'موٹر وولٹیج' },
      { param: 'P0305', name: 'Rated Motor Current (A)', defaultVal: 'Depends', recommended: 'Exact FLA from Nameplate', descUrdu: 'موٹر کا فل لوڈ کرنٹ' },
      { param: 'P0307', name: 'Rated Motor Power (kW)', defaultVal: 'Depends', recommended: 'kW from Nameplate', descUrdu: 'موٹر کلو واٹ' },
      { param: 'P0311', name: 'Rated Motor Speed (RPM)', defaultVal: '1420', recommended: '1440 RPM', descUrdu: 'موٹر کے چکر' },
      { param: 'P0700', name: 'Selection of Command Source', defaultVal: '1 (Keypad)', recommended: '2 (Terminals DI) or 5 (RS485 Modbus)', descUrdu: 'سٹارٹ کمانڈ سورس (کی پیڈ یا ٹرمینلز)' },
      { param: 'P1000', name: 'Selection of Frequency Setpoint', defaultVal: '1 (Keypad)', recommended: '2 (Analog Input AI1 0-10V)', descUrdu: 'سپیڈ کنٹرول سورس (پوٹینشومیٹر)' },
      { param: 'P1120', name: 'Ramp-up Time (Acceleration)', defaultVal: '10.0 s', recommended: '5.0 to 12.0 s', descUrdu: 'ایکسلریشن ٹائم (سپیڈ بننے کا وقت)' },
      { param: 'P1121', name: 'Ramp-down Time (Deceleration)', defaultVal: '10.0 s', recommended: '5.0 to 15.0 s', descUrdu: 'ڈیسیلیریشن ٹائم (رکنے کا وقت)' },
      { param: 'P3900', name: 'End of Quick Commissioning', defaultVal: '0', recommended: '1 (Calculate motor data & Save)', descUrdu: 'کمیشننگ مکمل اور سیو کریں' },
    ],
  },

  // 4. Forward / Reverse 2-Wire & 3-Wire Control
  {
    id: 'vfd-fwd-rev',
    title: 'VFD Forward / Reverse Wiring (2-Wire & 3-Wire)',
    titleUrdu: 'وی ایف ڈی فارورڈ / ریورس کنٹرول وائرنگ (2-وائر اور 3-وائر)',
    category: 'fwd_rev',
    description: `Control terminal wiring for direction control:
2-Wire Mode (Maintained Selector Switch):
- Switch 1 (FWD/STOP): Connects between +24V and DI1. Closed = Forward Run, Open = Stop.
- Switch 2 (REV/STOP): Connects between +24V and DI2. Closed = Reverse Run, Open = Stop.

3-Wire Mode (Momentary Pushbuttons):
- Stop Pushbutton (NC): Breaks continuous run latch on DI1.
- Forward Start (NO): Pulse triggers DI2 for Forward run.
- Reverse Start (NO): Pulse triggers DI3 for Reverse run.`,
    descriptionUrdu: `وی ایف ڈی کو سیدھا اور الٹا گھمانے کے دو طریقے:
1. 2-وائر طریقہ (سلیکٹر سوئچ کے ساتھ): سوئچ آن کرنے پر فارورڈ، دوسرا آن کرنے پر ریورس۔
2. 3-وائر طریقہ (پش بٹن کے ساتھ): ایک سٹاپ بٹن (NC) اور دو الگ الگ سٹارٹ پش بٹن (فارورڈ اور ریورس)۔`,
    diagramType: 'fwd_rev_wiring',
  },

  // 5. PLC to VFD Analog & Modbus Control
  {
    id: 'plc-vfd-modbus',
    title: 'PLC to VFD Interface (0-10V Analog & RS-485 Modbus RTU)',
    titleUrdu: 'پی ایل سی سے وی ایف ڈی کنٹرول (اینالاگ 0-10V اور موڈبس RS-485)',
    category: 'plc_vfd',
    description: `Method 1: Hardwired 0-10V Analog Speed Control:
- PLC Analog Output (AQ0 / 0-10V) connects to VFD Terminal AI1.
- PLC Analog Ground connects to VFD GND.
- 0V from PLC = 0 Hz; 5V = 25 Hz; 10V = 50 Hz.

Method 2: RS-485 2-Wire Modbus RTU Communication:
- Connect PLC RS-485 CB1241 / CM1241 Terminal A (+) to VFD Terminal 68 (RS485+).
- Connect PLC Terminal B (-) to VFD Terminal 69 (RS485-).
- Baud Rate: 9600 or 19200 bps, Parity: Even, 1 Stop bit.
- Modbus registers allow reading motor Amperes, Voltage, RPM, Fault code, and setting speed over a single twisted-pair cable!`,
    descriptionUrdu: `پی ایل سی سے انورٹر کی رفتار کنٹرول کرنے کے دو اہم طریقے:
1. اینالاگ 0-10 وولٹ: پی ایل سی سے 0V پر موٹر بند، 5V پر 25 ہرٹز، 10V پر پوری 50 ہرٹز سپیڈ۔
2. موڈبس RS-485 (صرف 2 تاروں پر کمیونیکیشن): پی ایل سی کے A اور B ٹرمینلز سے انورٹر پر سپیڈ، موٹر کا لائیو کرنٹ، وولٹیج اور ٹرپ فالٹ پڑھا جا سکتا ہے۔`,
    diagramType: 'plc_vfd_modbus',
  },

  // 6. SCADA & HMI Architecture
  {
    id: 'scada-hmi-architecture',
    title: 'HMI Screen Design & SCADA Industrial Architecture',
    titleUrdu: 'ایچ ایم آئی اور اسکاڈا (SCADA) سسٹم آرکیٹیکچر',
    category: 'scada',
    description: `Complete industrial automation hierarchy:
Level 0: Field Devices (Motors, Solenoid Valves, Temperature RTDs, Limit Switches).
Level 1: Direct Control (Siemens S7-1200 / S7-1500 PLCs, Variable Frequency Drives).
Level 2: Supervisory & Local Visualization (Siemens KTP700 / Kinco HMI Touch Panels mounted on control desk).
Level 3: Central SCADA System (WinCC / Wonderware running on central control room PC with dual monitors, real-time alarms, historical data logging, and SQL database reporting).`,
    descriptionUrdu: `انڈسٹریل آٹومیشن کا چار درجاتی اسکاڈا سسٹم:
لیول 0: فیلڈ آلات (موٹرز، والوز، سینسرز)۔
لیول 1: کنٹرولرز (پی ایل سی اور وی ایف ڈی انورٹرز)۔
لیول 2: ایچ ایم آئی ٹچ سکرین (آپریٹر کیلئے پینل پر لگی سکرین)۔
لیول 3: مین کنٹرول روم اسکاڈا کمپیوٹر (پورے پلانٹ کی مانیٹرنگ اور فالٹ ریکارڈ)۔`,
    diagramType: 'scada_architecture',
  },
];
