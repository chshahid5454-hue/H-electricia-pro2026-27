export interface CalculatorConfig {
  id: string;
  title: string;
  titleUrdu: string;
  tagline: string;
  taglineUrdu: string;
  formula: string;
  formulaUrdu: string;
  inputs: {
    id: string;
    label: string;
    labelUrdu: string;
    defaultValue: number | string;
    unit: string;
    step?: number;
    options?: { label: string; value: number | string }[];
  }[];
  calculate: (inputs: Record<string, number | string>) => {
    primaryResult: { label: string; labelUrdu: string; value: string; unit: string };
    secondaryResults: { label: string; labelUrdu: string; value: string; unit: string }[];
    steps: { stepEn: string; stepUrdu: string }[];
    recommendation?: { en: string; ur: string };
  };
}

export const CALCULATORS_DATA: CalculatorConfig[] = [
  // 1. Ohm's Law Calculator
  {
    id: 'ohms-law',
    title: "Ohm's Law (V, I, R, P)",
    titleUrdu: 'قانون اوہم کیلکولیٹر (V, I, R, P)',
    tagline: 'Calculate Voltage, Current, Resistance, and DC/AC Power',
    taglineUrdu: 'وولٹیج، کرنٹ (ایمپئر)، ریزسٹنس (اوہم) اور واٹ کا لائیو حساب',
    formula: 'V = I × R  |  P = V × I = I² × R = V² / R',
    formulaUrdu: 'وولٹیج = کرنٹ × ریزسٹنس  |  پاور = وولٹیج × کرنٹ',
    inputs: [
      { id: 'voltage', label: 'Voltage (V)', labelUrdu: 'وولٹیج (V)', defaultValue: 230, unit: 'Volts', step: 1 },
      { id: 'resistance', label: 'Resistance (R)', labelUrdu: 'ریزسٹنس (R)', defaultValue: 25, unit: 'Ohms (Ω)', step: 0.5 },
    ],
    calculate: (inputs) => {
      const v = Number(inputs.voltage) || 0;
      const r = Number(inputs.resistance) || 1;
      const i = v / r;
      const p = v * i;

      return {
        primaryResult: {
          label: 'Current (I)',
          labelUrdu: 'کرنٹ (ایمپئر)',
          value: i.toFixed(2),
          unit: 'Amperes (A)',
        },
        secondaryResults: [
          { label: 'Total Power (P)', labelUrdu: 'کل پاور (واٹ)', value: p.toFixed(1), unit: 'Watts (W)' },
          { label: 'Power in Kilowatts', labelUrdu: 'پاور کلو واٹ', value: (p / 1000).toFixed(3), unit: 'kW' },
          { label: 'Horsepower (HP)', labelUrdu: 'ہارس پاور (HP)', value: (p / 746).toFixed(2), unit: 'HP' },
        ],
        steps: [
          { stepEn: `Step 1: Current I = V / R = ${v} / ${r} = ${i.toFixed(2)} A`, stepUrdu: `مرحلہ 1: کرنٹ I = V / R = ${v} / ${r} = ${i.toFixed(2)} ایمپئر` },
          { stepEn: `Step 2: Power P = V × I = ${v} × ${i.toFixed(2)} = ${p.toFixed(1)} W`, stepUrdu: `مرحلہ 2: پاور P = V × I = ${v} × ${i.toFixed(2)} = ${p.toFixed(1)} واٹ` },
        ],
      };
    },
  },

  // 2. Power Calculator (Single Phase & 3-Phase)
  {
    id: 'power-calc',
    title: 'AC Power & Current (kW, kVA, HP, Ampere)',
    titleUrdu: 'پاور اور ایمپئر کیلکولیٹر (سنگل اور تھری فیز)',
    tagline: 'Calculate kW, kVA, HP, and Full Load Current for 1-Phase & 3-Phase',
    taglineUrdu: 'سنگل اور تھری فیز لوڈ کیلئے کلو واٹ، کے وی اے، ہارس پاور اور ایمپئر',
    formula: '1-Ph: P = V × I × cosθ | 3-Ph: P = √3 × VL × IL × cosθ',
    formulaUrdu: 'سنگل فیز: P = V × I × cosθ | تھری فیز: P = 1.732 × VL × IL × cosθ',
    inputs: [
      { id: 'power', label: 'Power Value', labelUrdu: 'پاور کی مقدار', defaultValue: 5, unit: 'Units', step: 0.5 },
      {
        id: 'powerUnit',
        label: 'Power Unit',
        labelUrdu: 'پاور کا یونٹ',
        defaultValue: 'kW',
        unit: '',
        options: [
          { label: 'Kilowatt (kW)', value: 'kW' },
          { label: 'Horsepower (HP)', value: 'HP' },
          { label: 'kVA', value: 'kVA' },
        ],
      },
      {
        id: 'phaseType',
        label: 'Phase System',
        labelUrdu: 'فیز سسٹم',
        defaultValue: '3phase',
        unit: '',
        options: [
          { label: '3-Phase (400V AC)', value: '3phase' },
          { label: '1-Phase (230V AC)', value: '1phase' },
        ],
      },
      { id: 'pf', label: 'Power Factor (cosθ)', labelUrdu: 'پاور فیکٹر (cosθ)', defaultValue: 0.85, unit: 'cos φ', step: 0.01 },
    ],
    calculate: (inputs) => {
      const pVal = Number(inputs.power) || 0;
      const unit = String(inputs.powerUnit || 'kW');
      const phase = String(inputs.phaseType || '3phase');
      const pf = Math.max(0.1, Math.min(1.0, Number(inputs.pf) || 0.85));

      let watts = 0;
      if (unit === 'kW') watts = pVal * 1000;
      else if (unit === 'HP') watts = pVal * 746;
      else if (unit === 'kVA') watts = pVal * 1000 * pf;

      const v = phase === '3phase' ? 400 : 230;
      let amps = 0;
      if (phase === '3phase') {
        amps = watts / (1.732 * v * pf);
      } else {
        amps = watts / (v * pf);
      }

      const kva = watts / (1000 * pf);
      const hp = watts / 746;
      const kw = watts / 1000;

      return {
        primaryResult: {
          label: 'Full Load Current (I)',
          labelUrdu: 'فل لوڈ کرنٹ (ایمپئر)',
          value: amps.toFixed(2),
          unit: 'Amps',
        },
        secondaryResults: [
          { label: 'Real Power', labelUrdu: 'حقیقی پاور', value: kw.toFixed(2), unit: 'kW' },
          { label: 'Apparent Power', labelUrdu: 'ایپرنٹ پاور', value: kva.toFixed(2), unit: 'kVA' },
          { label: 'Equivalent HP', labelUrdu: 'ہارس پاور', value: hp.toFixed(2), unit: 'HP' },
          { label: 'Recommended Breaker', labelUrdu: 'تجویز کردہ بریکر', value: `${Math.ceil(amps * 1.25)}A`, unit: 'MCB / MCCB' },
        ],
        steps: [
          {
            stepEn: phase === '3phase'
              ? `I = P / (√3 × V × cosθ) = ${watts.toFixed(0)} / (1.732 × 400 × ${pf}) = ${amps.toFixed(2)} A`
              : `I = P / (V × cosθ) = ${watts.toFixed(0)} / (230 × ${pf}) = ${amps.toFixed(2)} A`,
            stepUrdu: phase === '3phase'
              ? `کرنٹ = واٹ / (1.732 × وولٹیج × پاور فیکٹر) = ${amps.toFixed(2)} ایمپئر`
              : `کرنٹ = واٹ / (230 × پاور فیکٹر) = ${amps.toFixed(2)} ایمپئر`,
          },
        ],
        recommendation: {
          en: `Select continuous cable rated for at least ${(amps * 1.25).toFixed(1)} Amps (125% safety margin).`,
          ur: `کیبل کا انتخاب کم از کم ${(amps * 1.25).toFixed(1)} ایمپئر کی گنجائش کے مطابق کریں (125 فیصد سیفٹی فیکٹر)۔`,
        },
      };
    },
  },

  // 3. Wire Size & Ampacity Calculator (mm² to Amps)
  {
    id: 'wire-size',
    title: 'Wire Size & Ampacity (mm² to Amps)',
    titleUrdu: 'تار کا سائز اور کرنٹ کی گنجائش (mm²)',
    tagline: 'Standard Copper & Aluminum wire gauge carrying capacity in Pakistan',
    taglineUrdu: 'پاکستان سٹینڈرڈ کے مطابق کاپر اور ایلومینیم تار کی محفوظ کیپیسٹی',
    formula: 'Current Density J = I / Area (A/mm²) | Safe Copper = 4 to 6 A/mm²',
    formulaUrdu: 'کاپر کیبل کیلئے محفوظ کرنٹ: 4 سے 6 ایمپئر فی مربع ملی میٹر',
    inputs: [
      { id: 'loadAmps', label: 'Target Load Current (A)', labelUrdu: 'مطلوبہ لوڈ کرنٹ (ایمپئر)', defaultValue: 32, unit: 'Amperes', step: 1 },
      {
        id: 'conductor',
        label: 'Conductor Material',
        labelUrdu: 'تار کی دھات',
        defaultValue: 'copper',
        unit: '',
        options: [
          { label: 'Copper (خالص کاپر)', value: 'copper' },
          { label: 'Aluminum (ایلومینیم)', value: 'aluminum' },
        ],
      },
      {
        id: 'installation',
        label: 'Installation Method',
        labelUrdu: 'فٹنگ کا طریقہ',
        defaultValue: 'conduit',
        unit: '',
        options: [
          { label: 'Enclosed in Conduit Pipe (پائپ کے اندر)', value: 'conduit' },
          { label: 'Open Air / Cable Tray (کھلی ہوا / ٹرے)', value: 'open' },
        ],
      },
    ],
    calculate: (inputs) => {
      const amps = Number(inputs.loadAmps) || 1;
      const isCopper = inputs.conductor === 'copper';
      const isConduit = inputs.installation === 'conduit';

      // Standard wire sizes: 1.0, 1.5, 2.5, 4.0, 6.0, 10.0, 16.0, 25.0, 35.0, 50.0, 70.0, 95.0, 120.0
      const standardWires = [
        { size: 1.0, swg: '3/0.029 (approx 1mm²)', copperConduit: 11, copperOpen: 15, alumConduit: 8, alumOpen: 11 },
        { size: 1.5, swg: '3/0.036 (approx 1.5mm²)', copperConduit: 14.5, copperOpen: 19.5, alumConduit: 11, alumOpen: 15 },
        { size: 2.5, swg: '7/0.029 (approx 2.5mm²)', copperConduit: 20, copperOpen: 27, alumConduit: 15, alumOpen: 21 },
        { size: 4.0, swg: '7/0.036 (approx 4.0mm²)', copperConduit: 26, copperOpen: 36, alumConduit: 20, alumOpen: 28 },
        { size: 6.0, swg: '7/0.044 (approx 6.0mm²)', copperConduit: 34, copperOpen: 46, alumConduit: 26, alumOpen: 36 },
        { size: 10.0, swg: '7/0.052 / 7/0.064', copperConduit: 46, copperOpen: 63, alumConduit: 36, alumOpen: 49 },
        { size: 16.0, swg: '19/0.036 (approx 16mm²)', copperConduit: 61, copperOpen: 85, alumConduit: 48, alumOpen: 66 },
        { size: 25.0, swg: '19/0.044 (approx 25mm²)', copperConduit: 80, copperOpen: 112, alumConduit: 63, alumOpen: 87 },
        { size: 35.0, swg: '19/0.052 (approx 35mm²)', copperConduit: 99, copperOpen: 138, alumConduit: 77, alumOpen: 107 },
        { size: 50.0, swg: '19/0.064 (approx 50mm²)', copperConduit: 119, copperOpen: 168, alumConduit: 93, alumOpen: 131 },
        { size: 70.0, swg: '37/0.052 (approx 70mm²)', copperConduit: 151, copperOpen: 213, alumConduit: 118, alumOpen: 166 },
      ];

      // Safe capacity needed (1.25x load)
      const designAmps = amps * 1.25;
      let matched = standardWires[standardWires.length - 1];

      for (const w of standardWires) {
        const capacity = isCopper
          ? (isConduit ? w.copperConduit : w.copperOpen)
          : (isConduit ? w.alumConduit : w.alumOpen);
        if (capacity >= designAmps) {
          matched = w;
          break;
        }
      }

      const safeCap = isCopper
        ? (isConduit ? matched.copperConduit : matched.copperOpen)
        : (isConduit ? matched.alumConduit : matched.alumOpen);

      return {
        primaryResult: {
          label: 'Recommended Cable Size',
          labelUrdu: 'تجویز کردہ تار کا سائز',
          value: `${matched.size} mm²`,
          unit: `(${matched.swg})`,
        },
        secondaryResults: [
          { label: 'Max Safe Current', labelUrdu: 'زیادہ سے زیادہ محفوظ کرنٹ', value: `${safeCap} A`, unit: 'Continuous' },
          { label: 'Design Load (with 25% safety)', labelUrdu: 'ڈیزائن لوڈ بمعہ 25% سیفٹی', value: `${designAmps.toFixed(1)} A`, unit: 'Amps' },
          { label: 'Recommended Breaker', labelUrdu: 'تجویز کردہ ایم سی بی بریکر', value: `${Math.ceil(amps * 1.25)}A`, unit: 'Curve C' },
        ],
        steps: [
          { stepEn: `Load Current = ${amps} A. Factoring 1.25x continuous safety margin = ${designAmps.toFixed(1)} A.`, stepUrdu: `لوڈ کرنٹ = ${amps} ایمپئر۔ 25 فیصد سیفٹی مارجن کے ساتھ ڈیزائن کرنٹ = ${designAmps.toFixed(1)} ایمپئر۔` },
          { stepEn: `Selected ${matched.size} mm² ${inputs.conductor} with rating ${safeCap} A.`, stepUrdu: `منتخب سائز: ${matched.size} مربع ملی میٹر ${inputs.conductor === 'copper' ? 'کاپر' : 'ایلومینیم'}، جس کی گنجائش ${safeCap} ایمپئر ہے۔` },
        ],
      };
    },
  },

  // 4. Motor HP to Amp & Overload Relay Setting
  {
    id: 'motor-hp-amp',
    title: 'Motor HP to Ampere & Starter Sizing',
    titleUrdu: 'موٹر ہارس پاور، ایمپئر اور سٹارٹر سائزنگ',
    tagline: 'Calculate Full Load Amps (FLA), DOL / Star-Delta starter, and Overload relay range',
    taglineUrdu: 'تھری فیز و سنگل فیز موٹر ایمپئر، اوور لوڈ ریلے کی سیٹنگ اور کنٹیکٹر ریٹنگ',
    formula: 'FLA (3-Ph) = (HP × 746) / (√3 × V × PF × Eff)',
    formulaUrdu: 'موٹر ایمپئر = (ہارس پاور × 746) / (1.732 × 400 × 0.85 × 0.88)',
    inputs: [
      { id: 'hp', label: 'Motor Rating (HP)', labelUrdu: 'موٹر کی ہارس پاور (HP)', defaultValue: 10, unit: 'HP', step: 0.5 },
      {
        id: 'motorPhase',
        label: 'Voltage & Phase',
        labelUrdu: 'وولٹیج اور فیز',
        defaultValue: '3ph400',
        unit: '',
        options: [
          { label: '3-Phase 380V/400V AC (انڈسٹریل)', value: '3ph400' },
          { label: '1-Phase 220V/230V AC (گھریلو/کمرشل)', value: '1ph230' },
        ],
      },
      { id: 'efficiency', label: 'Motor Efficiency (η %)', labelUrdu: 'موٹر کی کارکردگی (ایفیشنسی %)', defaultValue: 88, unit: '%', step: 1 },
      { id: 'pf', label: 'Power Factor', labelUrdu: 'پاور فیکٹر (cosφ)', defaultValue: 0.85, unit: '', step: 0.01 },
    ],
    calculate: (inputs) => {
      const hp = Number(inputs.hp) || 1;
      const is3Ph = inputs.motorPhase === '3ph400';
      const eff = (Number(inputs.efficiency) || 88) / 100;
      const pf = Number(inputs.pf) || 0.85;

      const watts = hp * 746;
      let fla = 0;
      if (is3Ph) {
        fla = watts / (1.732 * 400 * pf * eff);
      } else {
        fla = watts / (230 * pf * eff);
      }

      const startingCurrent = fla * 6; // 6x inrush on DOL
      const isStarDeltaRecommended = hp >= 7.5;
      const contactorRating = is3Ph
        ? (isStarDeltaRecommended ? Math.ceil(fla * 0.58 * 1.2) : Math.ceil(fla * 1.25))
        : Math.ceil(fla * 1.3);

      const overloadMin = (fla * 0.9).toFixed(1);
      const overloadMax = (fla * 1.15).toFixed(1);

      return {
        primaryResult: {
          label: 'Full Load Current (FLA)',
          labelUrdu: 'فل لوڈ کرنٹ (FLA)',
          value: fla.toFixed(1),
          unit: 'Amps',
        },
        secondaryResults: [
          { label: 'Overload Relay Setting', labelUrdu: 'اوور لوڈ ریلے کی سیٹنگ', value: `${fla.toFixed(1)} A`, unit: `Range: ${overloadMin} - ${overloadMax}A` },
          { label: 'Starter Type', labelUrdu: 'سٹارٹر کی قسم', value: isStarDeltaRecommended ? 'Star-Delta / VFD' : 'Direct-On-Line (DOL)', unit: hp >= 7.5 ? 'Heavy Load' : 'Standard' },
          { label: 'Contactor AC-3 Rating', labelUrdu: 'کنٹیکٹر AC-3 ریٹنگ', value: `${contactorRating}A`, unit: 'AC-3 duty' },
          { label: 'DOL Starting Inrush (6x)', labelUrdu: 'سٹارٹنگ جھٹکا کرنٹ (6 گنا)', value: `${startingCurrent.toFixed(0)}A`, unit: 'Peak Amps' },
        ],
        steps: [
          { stepEn: `Power in Watts = ${hp} HP × 746 = ${watts} Watts.`, stepUrdu: `پاور واٹس میں = ${hp} HP × 746 = ${watts} واٹ۔` },
          { stepEn: `FLA = ${watts} / (${is3Ph ? '1.732 × 400' : '230'} × ${pf} × ${eff.toFixed(2)}) = ${fla.toFixed(1)} A.`, stepUrdu: `فل لوڈ کرنٹ = ${watts} / (${is3Ph ? '692.8' : '230'} × ${pf} × ${eff.toFixed(2)}) = ${fla.toFixed(1)} ایمپئر۔` },
          { stepEn: `Set thermal overload relay strictly to 100% of motor rated plate FLA (${fla.toFixed(1)} A).`, stepUrdu: `تھرمل اوور لوڈ ریلے کو موٹر کی نیم پلیٹ کے فل لوڈ کرنٹ یعنی ${fla.toFixed(1)} ایمپئر پر سیٹ کریں۔` },
        ],
      };
    },
  },

  // 5. Capacitor Sizing for Power Factor Correction (kVAR)
  {
    id: 'capacitor-pf',
    title: 'Capacitor Sizing for Power Factor (kVAR)',
    titleUrdu: 'پاور فیکٹر امپروومنٹ کیلئے کپیسیٹر سائزنگ (kVAR)',
    tagline: 'Calculate required kVAR to eliminate low PF penalties and save electricity',
    taglineUrdu: 'واپڈا کا لو پاور فیکٹر جرمانہ ختم کرنے کیلئے درکار کپیسیٹر (kVAR اور مائیکرو فیراڈ)',
    formula: 'kVAR = kW × [tan(cos⁻¹ PF₁) - tan(cos⁻¹ PF₂)]',
    formulaUrdu: 'kVAR = کلو واٹ × [tan θ1 - tan θ2]',
    inputs: [
      { id: 'loadKw', label: 'Plant Active Load (kW)', labelUrdu: 'پلانٹ کا ایکٹو لوڈ (kW)', defaultValue: 50, unit: 'kW', step: 1 },
      { id: 'currentPf', label: 'Current Power Factor', labelUrdu: 'موجودہ پاور فیکٹر (PF 1)', defaultValue: 0.72, unit: 'cos θ', step: 0.01 },
      { id: 'targetPf', label: 'Target Power Factor', labelUrdu: 'مطلوبہ پاور فیکٹر (PF 2)', defaultValue: 0.98, unit: 'cos θ', step: 0.01 },
    ],
    calculate: (inputs) => {
      const kw = Number(inputs.loadKw) || 1;
      const pf1 = Math.min(0.95, Math.max(0.4, Number(inputs.currentPf) || 0.72));
      const pf2 = Math.min(1.0, Math.max(pf1 + 0.02, Number(inputs.targetPf) || 0.98));

      const angle1 = Math.acos(pf1);
      const angle2 = Math.acos(pf2);
      const tan1 = Math.tan(angle1);
      const tan2 = Math.tan(angle2);

      const kvar = kw * (tan1 - tan2);
      // For 400V 50Hz 3-phase: C (uF) per phase delta = kvar * 10^9 / (3 * 2 * pi * 50 * 400^2)
      const uF = (kvar * 1000) / (3 * 2 * Math.PI * 50 * Math.pow(400, 2) * 1e-6);

      return {
        primaryResult: {
          label: 'Required Capacitor Bank',
          labelUrdu: 'درکار کپیسیٹر بینک سائز',
          value: kvar.toFixed(1),
          unit: 'kVAR',
        },
        secondaryResults: [
          { label: 'Capacitance in Microfarad', labelUrdu: 'مائیکرو فیراڈ (Delta)', value: uF.toFixed(0), unit: 'µF (per phase)' },
          { label: 'Current Reduction', labelUrdu: 'کرنٹ میں کمی', value: `${(((1 / pf1) - (1 / pf2)) / (1 / pf1) * 100).toFixed(0)}%`, unit: 'Amps saved' },
          { label: 'Recommended Bank Steps', labelUrdu: 'تجویز کردہ سٹیپس', value: kvar > 30 ? `${Math.ceil(kvar / 10)} × 10 kVAR` : 'Single stage', unit: 'APFC Relay' },
        ],
        steps: [
          { stepEn: `tan(θ₁) = ${tan1.toFixed(3)}, tan(θ₂) = ${tan2.toFixed(3)}. Multiplier = ${(tan1 - tan2).toFixed(3)}.`, stepUrdu: `ابتدائی زاویہ tan = ${tan1.toFixed(3)}، مطلوبہ زاویہ tan = ${tan2.toFixed(3)}۔` },
          { stepEn: `kVAR = ${kw} kW × (${tan1.toFixed(3)} - ${tan2.toFixed(3)}) = ${kvar.toFixed(1)} kVAR.`, stepUrdu: `درکار kVAR = ${kw} kW × ${(tan1 - tan2).toFixed(3)} = ${kvar.toFixed(1)} kVAR۔` },
        ],
        recommendation: {
          en: 'Use capacitor duty contactors with damping resistors to avoid inrush damage.',
          ur: 'کپیسیٹر کیلئے ہمیشہ اسپیشل کپیسیٹر ڈیوٹی کنٹیکٹر اور ڈی ٹیونڈ ری ایکٹر استعمال کریں۔',
        },
      };
    },
  },

  // 6. Voltage Drop & Cable Length Calculator
  {
    id: 'voltage-drop',
    title: 'Voltage Drop & Cable Length Calculator',
    titleUrdu: 'وولٹیج ڈراپ اور کیبل لمبائی کیلکولیٹر',
    tagline: 'Check % drop over long distances (Safe limit is 2.5% for lighting, 5% for motors)',
    taglineUrdu: 'لمبے فاصلے پر وولٹیج کا گرنا معلوم کریں (لائٹ کیلئے 2.5% اور موٹر کیلئے 5% تک جائز ہے)',
    formula: 'VD (1-Ph) = (2 × L × I × ρ) / A | VD (3-Ph) = (√3 × L × I × ρ) / A',
    formulaUrdu: 'وولٹیج ڈراپ = (1.732 × لمبائی میٹر × کرنٹ × کاپر ریزسٹیوٹی) / تار کا کراس سیکشن',
    inputs: [
      { id: 'distance', label: 'One-Way Distance', labelUrdu: 'فاصلہ (ایک طرفہ لمبائی)', defaultValue: 75, unit: 'Meters', step: 5 },
      { id: 'current', label: 'Operating Current', labelUrdu: 'کرنٹ (ایمپئر)', defaultValue: 25, unit: 'Amps', step: 1 },
      {
        id: 'cableSize',
        label: 'Cable Cross Section',
        labelUrdu: 'تار کا سائز (mm²)',
        defaultValue: 6,
        unit: 'mm²',
        options: [
          { label: '2.5 mm² (7/0.029)', value: 2.5 },
          { label: '4.0 mm² (7/0.036)', value: 4.0 },
          { label: '6.0 mm² (7/0.044)', value: 6.0 },
          { label: '10.0 mm²', value: 10.0 },
          { label: '16.0 mm²', value: 16.0 },
          { label: '25.0 mm²', value: 25.0 },
          { label: '35.0 mm²', value: 35.0 },
          { label: '50.0 mm²', value: 50.0 },
        ],
      },
      {
        id: 'sysPhase',
        label: 'System Voltage',
        labelUrdu: 'سسٹم وولٹیج',
        defaultValue: '400',
        unit: 'V',
        options: [
          { label: '400V 3-Phase AC', value: 400 },
          { label: '230V 1-Phase AC', value: 230 },
          { label: '12V DC Solar/Battery', value: 12 },
          { label: '24V DC Industrial', value: 24 },
        ],
      },
    ],
    calculate: (inputs) => {
      const length = Number(inputs.distance) || 1;
      const i = Number(inputs.current) || 1;
      const area = Number(inputs.cableSize) || 4;
      const nominalV = Number(inputs.sysPhase) || 400;

      // Copper resistivity ρ = 0.0175 ohm·mm²/m
      const rho = 0.0175;
      const is3Phase = nominalV === 400;

      let vDrop = 0;
      if (is3Phase) {
        vDrop = (Math.sqrt(3) * length * i * rho) / area;
      } else {
        vDrop = (2 * length * i * rho) / area;
      }

      const percentDrop = (vDrop / nominalV) * 100;
      const receivingV = nominalV - vDrop;
      const isSafe = percentDrop <= (is3Phase ? 5.0 : 3.0);

      return {
        primaryResult: {
          label: 'Voltage Drop',
          labelUrdu: 'وولٹیج ڈراپ',
          value: `${vDrop.toFixed(2)} V`,
          unit: `(${percentDrop.toFixed(2)}%)`,
        },
        secondaryResults: [
          { label: 'Receiving End Voltage', labelUrdu: 'آخری سرے پر وولٹیج', value: `${receivingV.toFixed(1)} V`, unit: 'Volts' },
          { label: 'Safety Compliance', labelUrdu: 'سیفٹی حیثیت', value: isSafe ? 'PASSED (محفوظ)' : 'FAILED - HIGH DROP (خطرناک)', unit: isSafe ? 'Within limits' : 'Increase cable size' },
          { label: 'Power Loss in Cable', labelUrdu: 'کیبل میں ضائع پاور', value: ((is3Phase ? 3 : 2) * Math.pow(i, 2) * (length * rho / area)).toFixed(1), unit: 'Watts' },
        ],
        steps: [
          { stepEn: `Resistance of Cable R = (ρ × L) / A = (0.0175 × ${length}) / ${area} = ${(rho * length / area).toFixed(3)} Ω`, stepUrdu: `کیبل کی مزاحمت R = ${(rho * length / area).toFixed(3)} اوہم۔` },
          { stepEn: `Voltage Drop = ${is3Phase ? '√3 × I × R' : '2 × I × R'} = ${vDrop.toFixed(2)} V (${percentDrop.toFixed(2)}%)`, stepUrdu: `وولٹیج ڈراپ = ${vDrop.toFixed(2)} وولٹ (${percentDrop.toFixed(2)} فیصد)۔` },
        ],
        recommendation: {
          en: isSafe ? 'Voltage drop is within IEC 60364 allowable standard limits.' : 'Warning: High drop! Upsize to the next wire size to prevent motor heating or light dimming.',
          ur: isSafe ? 'وولٹیج ڈراپ بین الاقوامی معیار کے مطابق بالکل درست ہے۔' : 'انتباہ: وولٹیج ڈراپ زیادہ ہے! موٹر جلنے یا لائٹ مدہم ہونے سے بچنے کیلئے بڑی کیبل استعمال کریں۔',
        },
      };
    },
  },

  // 7. Electricity Bill & Tariff Cost Calculator (Pakistan Slabs)
  {
    id: 'bill-cost',
    title: 'Electricity Bill & Unit Cost (WAPDA / K-Electric)',
    titleUrdu: 'بجلی کا بل اور یونٹ خرچ کیلکولیٹر (واپڈا / کے الیکٹرک)',
    tagline: 'Calculate units (kWh), estimated cost, and slab rates for residential & industrial',
    taglineUrdu: 'گھریلو اور انڈسٹریل یونٹس، فی گھنٹہ خرچ، پی ایس ڈی ایف اور جی ایس ٹی سمیت متوقع بل',
    formula: 'Units (kWh) = (Watts × Hours per day × Days) / 1000',
    formulaUrdu: 'یونٹس = (کل واٹ × روزانہ گھنٹے × دن) / 1000',
    inputs: [
      { id: 'watts', label: 'Total Connected Load (W)', labelUrdu: 'کل آن لوڈ (واٹس)', defaultValue: 2500, unit: 'Watts', step: 100 },
      { id: 'hoursPerDay', label: 'Running Hours per Day', labelUrdu: 'روزانہ چلنے کے گھنٹے', defaultValue: 10, unit: 'Hours', step: 0.5 },
      { id: 'days', label: 'Billing Period Days', labelUrdu: 'دنوں کی تعداد', defaultValue: 30, unit: 'Days', step: 1 },
      {
        id: 'tariffType',
        label: 'Tariff Category',
        labelUrdu: 'میٹر کی قسم',
        defaultValue: 'residential',
        unit: '',
        options: [
          { label: 'Residential (گھریلو محفوظ/غیر محفوظ)', value: 'residential' },
          { label: 'Commercial (دکان / مارکیٹ)', value: 'commercial' },
          { label: 'Industrial B1 / B2 (فیکٹری / ٹیوب ویل)', value: 'industrial' },
        ],
      },
    ],
    calculate: (inputs) => {
      const w = Number(inputs.watts) || 0;
      const hours = Number(inputs.hoursPerDay) || 0;
      const days = Number(inputs.days) || 30;
      const tariff = String(inputs.tariffType || 'residential');

      const units = (w * hours * days) / 1000;

      let baseRatePerUnit = 28;
      if (tariff === 'commercial') baseRatePerUnit = 48;
      else if (tariff === 'industrial') baseRatePerUnit = 42;
      else {
        // Residential slabs:
        if (units <= 100) baseRatePerUnit = 16.5;
        else if (units <= 200) baseRatePerUnit = 22.9;
        else if (units <= 300) baseRatePerUnit = 27.5;
        else if (units <= 700) baseRatePerUnit = 38.5;
        else baseRatePerUnit = 45.0;
      }

      const energyCharges = units * baseRatePerUnit;
      // GST + Fuel adjustment + FPA + FC Surcharge approx 32% extra
      const taxesAndSurcharges = energyCharges * 0.35;
      const totalEstimatedBill = energyCharges + taxesAndSurcharges;
      const costPerDay = totalEstimatedBill / days;

      return {
        primaryResult: {
          label: 'Estimated Monthly Bill',
          labelUrdu: 'کل متوقع ماہانہ بل',
          value: `PKR ${Math.round(totalEstimatedBill).toLocaleString()}`,
          unit: 'Rupees',
        },
        secondaryResults: [
          { label: 'Total Units Consumed', labelUrdu: 'کل استعمال شدہ یونٹس', value: `${units.toFixed(1)} kWh`, unit: 'Units' },
          { label: 'Average Unit Rate', labelUrdu: 'بنیادی فی یونٹ ریٹ', value: `PKR ${baseRatePerUnit.toFixed(1)}`, unit: '/ kWh' },
          { label: 'Estimated Daily Cost', labelUrdu: 'روزانہ کا متوقع خرچ', value: `PKR ${costPerDay.toFixed(0)}`, unit: '/ Day' },
          { label: 'Taxes & Surcharges (approx)', labelUrdu: 'ٹیکس اور فیول ایڈجسٹمنٹ', value: `PKR ${Math.round(taxesAndSurcharges).toLocaleString()}`, unit: 'FPA + GST' },
        ],
        steps: [
          { stepEn: `Units = (${w} Watts × ${hours} hrs × ${days} days) / 1000 = ${units.toFixed(1)} kWh.`, stepUrdu: `یونٹس = (${w} واٹ × ${hours} گھنٹے × ${days} دن) / 1000 = ${units.toFixed(1)} یونٹ۔` },
          { stepEn: `Base Energy Cost = ${units.toFixed(1)} units × PKR ${baseRatePerUnit} = PKR ${Math.round(energyCharges)}.`, stepUrdu: `بنیادی لاگت = ${units.toFixed(1)} یونٹ × ${baseRatePerUnit} روپے = ${Math.round(energyCharges)} روپے` },
        ],
      };
    },
  },
];
