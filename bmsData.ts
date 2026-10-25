import { BMSTopic } from '../types';

export const BMS_TOPICS_DATA: BMSTopic[] = [
  // 1. BMS Architecture
  {
    id: 'bms-architecture',
    title: 'Building Management System (BMS) 4-Layer Architecture',
    titleUrdu: 'بلڈنگ مینجمنٹ سسٹم (BMS) چار سطحی آرکیٹیکچر',
    category: 'architecture',
    description: `A modern smart commercial building BMS integrates HVAC, Electrical Panels, Plumbing Pumps, DALI Lighting, Access Control, and Fire systems into a centralized supervisory software.`,
    descriptionUrdu: 'جدید عمارتوں کا سنٹرل کنٹرول سسٹم جو بجلی کے پینلز، اے سی چلرز، پمپوں، لائٹنگ، اور سیکیورٹی ایکسس کنٹرول کو کمپیوٹر سکرین سے کنٹرول کرتا ہے۔',
    architectureLevels: [
      { level: 'Level 0 (Field Layer)', title: 'Sensors & Actuators', protocols: '4-20mA, 0-10V, PT1000, Dry Contacts', devices: 'Pressure transmitters, water flow switches, damper motors, VFDs', descUrdu: 'فیلڈ سینسرز اور موٹرائزڈ والوز' },
      { level: 'Level 1 (Direct Control)', title: 'DDC Controllers', protocols: 'BACnet MS/TP, Modbus RTU RS485', devices: 'Honeywell Alerton, Johnson Controls Metasys, Siemens Desigo DDCs', descUrdu: 'ڈی ڈی سی کنٹرولر پینلز' },
      { level: 'Level 2 (Network Layer)', title: 'BMS Routers & Switches', protocols: 'BACnet/IP, Modbus TCP/IP, Ethernet', devices: 'Industrial Ethernet switches, IP-to-MSTP routers', descUrdu: 'نیٹ ورک اور راؤٹرز' },
      { level: 'Level 3 (Supervisory)', title: 'BMS Server & Workstations', protocols: 'Web Services, REST API, OPC UA', devices: 'Central control room server, Operator GUI, historical SQL database', descUrdu: 'مین کمپیوٹر سرور اور کنٹرول روم' },
    ],
    diagramType: 'bms_architecture',
  },

  // 2. DALI & Lighting Control
  {
    id: 'bms-lighting-dali',
    title: 'DALI (Digital Addressable Lighting Interface) & Occupancy Control',
    titleUrdu: 'ڈالی (DALI) انٹیلیجنٹ لائٹنگ اور موشن سنسر کنٹرول',
    category: 'lighting',
    description: `DALI-2 allows addressing up to 64 lighting ballasts / LED drivers on a single 2-wire polarity-free control bus running at 16V DC:
- Broadcast or individual fixture dimming (0.1% to 100% smooth logarithmic dimming).
- Motion & Daylight Harvesting: Lux sensors dim perimeter lights when daylight enters through glass facades, saving 40% electrical energy.
- Relay Schedule Modules: Turns off exterior facades, signages, and corridors automatically on astronomical sunset/sunrise clock.`,
    descriptionUrdu: 'ڈالی (DALI) سسٹم میں صرف 2 تاروں پر 64 لائٹس کو الگ الگ ایڈریس دے کر کمپیوٹر سے ڈم یا آن آف کیا جا سکتا ہے۔ دن میں کھڑکی سے دھوپ آنے پر لائٹ خودکار مدہم ہو جاتی ہے۔',
    diagramType: 'lighting_dali',
  },

  // 3. Access Control & Fire Alarm Safety Interlock
  {
    id: 'bms-access-fire-interlock',
    title: 'Access Control Electromagnetic Lock (EM-Lock) & Fire Interlock',
    titleUrdu: 'ایکسس کنٹرول میگنیٹک لاک (EM-Lock) اور فائر الارم سیفٹی انٹرلاک',
    category: 'access_control',
    description: `Access Control Wiring Principles:
- 12V DC 500mA Electromagnetic Lock (600 lbs holding force) mounted on emergency door frame.
- Request-to-Exit (REX) push button or PIR motion sensor.
- RFID Card Reader / Biometric fingerprint scanner.

CRITICAL LIFE SAFETY REQUIREMENT (Fail-Safe):
- Power supply to EM-lock (+12V) MUST route directly through a physical NC dry contact of the building Fire Alarm Control Panel (FACP).
- In the event of fire alarm activation or total power failure, the fire relay drops out, breaking the 12V DC circuit and unlocking EVERY emergency fire escape door instantly to allow trapped occupants to escape without needing an access card!`,
    descriptionUrdu: `ایکسس کنٹرول اور ایمرجنسی گیٹ کا بنیادی اصول:
دروازے پر لگا میگنیٹک لاک (EM-Lock) 12V ڈی سی پاور سے لاک رہتا ہے۔

سیفٹی کا لازمی اصول (Fail-Safe):
میگنیٹک لاک کی 12V سپلائی کو فائر الارم پینل کے این سی (NC) ریلے کے ذریعے گزارا جاتا ہے۔ جیسے ہی عمارت میں آگ کا سگنل آئے گا یا بجلی جائے گی، فائر ریلے فوراً تمام ایمرجنسی دروازوں کا کرنٹ کاٹ دے گی اور سارے دروازے خود بخود ان لاک ہو جائیں گے تاکہ لوگ باآسانی باہر نکل سکیں۔`,
    diagramType: 'access_fire_interlock',
  },

  // 4. DDC Panel Wiring
  {
    id: 'bms-ddc-panel-wiring',
    title: 'DDC Control Panel Wiring, Grounding & Shielding Rules',
    titleUrdu: 'ڈی ڈی سی پینل وائرنگ، گراؤنڈنگ اور شیلڈنگ کے اصول',
    category: 'bms_panel',
    description: `Wiring standards for DDC (Direct Digital Control) Panels:
1. 24V AC Control Power: Step-down transformer (230V to 24V AC) with secondary grounded on one leg to create Class 2 neutral reference.
2. Signal Cable Types: Belden 8760 or equivalent (1 pair 18 AWG shielded) for analog signals; Cat6 for Ethernet BACnet/IP.
3. GROUNDING GOLDEN RULE: Shield drain wires must be connected to panel earth ground at the DDC PANEL END ONLY. Never ground both ends of a cable shield! Grounding both ends creates ground loops that introduce massive 50Hz hum and corrupt sensor readings.`,
    descriptionUrdu: `ڈی ڈی سی پینل وائرنگ کا سنہری اصول:
سینسر کی شیلڈ والی تاروں کا ارتھ صرف اور صرف پینل کے اندر ایک سرے پر جوڑیں۔ دونوں سروں پر ارتھ جوڑنے سے گراؤنڈ لوپ پیدا ہوتا ہے اور اینالاگ سگنل خراب ہو جاتا ہے۔`,
    diagramType: 'ddc_panel',
  },
];
