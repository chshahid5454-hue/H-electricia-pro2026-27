/**
 * H Electrician Pro - Industrial Encyclopedia
 * Type Definitions
 * Created for Shahid Electrician
 */

export type Language = 'en' | 'ur';

export type ModuleId =
  | 'calculators'
  | 'formulas'
  | 'diagrams'
  | 'plc'
  | 'sensors'
  | 'vfd'
  | 'hvac'
  | 'bms'
  | 'fire_alarm'
  | 'lift'
  | 'panels'
  | 'components'
  | 'tools_safety'
  | 'fault_finding'
  | 'work_diary';

export interface ModuleInfo {
  id: ModuleId;
  moduleNumber: number;
  title: string;
  titleUrdu: string;
  tagline: string;
  taglineUrdu: string;
  iconName: string;
  color: string;
  topicsCount: number;
  category: 'core' | 'automation' | 'systems' | 'field_work';
}

export interface FormulaItem {
  id: string;
  category: 'single_phase' | 'three_phase' | 'motor' | 'transformer' | 'power_factor' | 'earthing' | 'battery';
  categoryTitle: string;
  categoryTitleUrdu: string;
  title: string;
  titleUrdu: string;
  formula: string;
  explanation: string;
  explanationUrdu: string;
  variables: { symbol: string; name: string; unit: string; nameUrdu: string }[];
  example: string;
  exampleUrdu: string;
}

export interface DiagramItem {
  id: string;
  category:
    | 'house_wiring'
    | 'solar_ups'
    | 'ats_generator'
    | 'inverter'
    | 'industrial_panels'
    | 'plc_automation'
    | 'vfd_scada'
    | 'hvac_bms'
    | 'fire_lift'
    | 'residential_solar'
    | string;
  title: string;
  titleUrdu: string;
  description: string;
  descriptionUrdu: string;
  diagramType: string;
  voltageRating?: string;
  standardRef?: string;
  componentsUsed: string[];
  componentsUsedUrdu: string[];
  wiringSteps: string[];
  wiringStepsUrdu: string[];
  safetyNotes: string[];
  safetyNotesUrdu: string[];
}

export interface PLCRung {
  rungNumber: number;
  title: string;
  titleUrdu: string;
  description: string;
  descriptionUrdu: string;
  instructionType: 'latch' | 'star_delta' | 'tank_level' | 'traffic_light';
  ladderSvg: string;
}

export interface PLCTopic {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'intro' | 'wiring' | 'ladder' | 'tia_portal';
  content: string;
  contentUrdu: string;
  diagramType?: 's7_1200_cpu' | 'input_wiring' | 'output_wiring' | 'sink_source' | 'ladder_latch' | 'ladder_star_delta' | 'ladder_tank' | 'ladder_traffic' | 'tia_workflow';
  keyPoints?: string[];
  keyPointsUrdu?: string[];
}

export interface SensorItem {
  id: string;
  title: string;
  titleUrdu: string;
  type: 'proximity_pnp_npn' | 'inductive' | 'capacitive' | 'photoelectric' | 'limit_switch' | 'float_switch' | 'pressure_switch';
  symbolName: string;
  colorCode: { wire: string; color: string; signal: string; colorUrdu: string; signalUrdu: string }[];
  workingPrinciple: string;
  workingPrincipleUrdu: string;
  testingMethod: string[];
  testingMethodUrdu: string[];
  applications: string[];
  applicationsUrdu: string[];
  diagramType: 'pnp_npn' | 'inductive_sensor' | 'photoelectric_sensor' | 'limit_switch' | 'float_switch' | 'danfoss_kp35';
}

export interface VFDTopic {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'vfd_wiring' | 'danfoss_params' | 'siemens_params' | 'fwd_rev' | 'plc_vfd' | 'hmi' | 'scada';
  description: string;
  descriptionUrdu: string;
  parametersTable?: { param: string; name: string; defaultVal: string; recommended: string; descUrdu: string }[];
  wiringGuide?: string[];
  wiringGuideUrdu?: string[];
  diagramType?: 'vfd_power_control' | 'fwd_rev_wiring' | 'plc_vfd_modbus' | 'hmi_screen' | 'scada_architecture';
}

export interface HVACTopic {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'ac_wiring' | 'chiller' | 'ahu_fcu' | 'thermostat' | 'compressor' | 'gas_pressures';
  description: string;
  descriptionUrdu: string;
  pressureTable?: { gas: string; suctionPsi: string; dischargePsi: string; standingPsi: string; notesUrdu: string }[];
  thermostatWiring?: { terminal: string; wireColor: string; function: string; functionUrdu: string }[];
  diagramType?: 'split_ac' | 'chiller_system' | 'ahu_fcu' | 'thermostat_7wire' | 'compressor_csr' | 'gas_chart';
  testingSteps?: string[];
  testingStepsUrdu?: string[];
}

export interface BMSTopic {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'architecture' | 'lighting' | 'access_control' | 'cctv' | 'bms_panel';
  description: string;
  descriptionUrdu: string;
  architectureLevels?: { level: string; title: string; protocols: string; devices: string; descUrdu: string }[];
  wiringSteps?: string[];
  wiringStepsUrdu?: string[];
  diagramType?: 'bms_architecture' | 'lighting_dali' | 'access_fire_interlock' | 'cctv_bms' | 'ddc_panel';
}

export interface FireAlarmTopic {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'conventional_vs_addressable' | 'detectors' | 'mcp_hooter' | 'panel_wiring' | 'fault_finding';
  description: string;
  descriptionUrdu: string;
  specs?: { label: string; value: string; labelUrdu: string }[];
  wiringDiagramType?: 'conv_vs_addr' | 'detector_wiring' | 'mcp_sounder' | 'gst_panel' | 'fire_faults';
  faultRemedies?: { fault: string; faultUrdu: string; cause: string; causeUrdu: string; remedy: string; remedyUrdu: string }[];
}

export interface LiftTopic {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'control_panel' | 'ard' | 'door_operator' | 'limits' | 'traveling_cable' | 'brake' | 'encoder';
  description: string;
  descriptionUrdu: string;
  diagramType?: 'lift_panel' | 'ard_system' | 'door_vvvf' | 'safety_limits' | 'traveling_cable' | 'brake_circuit' | 'encoder_traction';
  testingSteps?: string[];
  testingStepsUrdu?: string[];
}

export interface IndustrialPanelTopic {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'mcc' | 'pcc' | 'apfc' | 'ats' | 'busbar_chart' | 'cable_gland' | 'switchgear';
  description: string;
  descriptionUrdu: string;
  busbarData?: { currentA: string; copperMm: string; aluminumMm: string; thicknessMm: string }[];
  cableGlandData?: { cableSizeSqmm: string; glandSizePG: string; glandSizeMetric: string; holeDiameterMm: string }[];
  diagramType?: 'mcc_panel' | 'pcc_acb' | 'apfc_steps' | 'ats_panel' | 'busbar_layout' | 'switchgear_coordination';
}

export interface ComponentItem {
  id: string;
  name: string;
  nameUrdu: string;
  symbol: string;
  function: string;
  functionUrdu: string;
  testingSteps: string[];
  testingStepsUrdu: string[];
  commonFaults: string[];
  commonFaultsUrdu: string[];
  priceRangePKR: string;
  priceNoteUrdu: string;
  specifications: { key: string; value: string; keyUrdu: string }[];
  graphicType: 'mcb' | 'mccb' | 'rccb' | 'contactor' | 'relay' | 'timer' | 'ct' | 'pt' | 'capacitor' | 'diode' | 'transistor_igbt' | 'soft_starter' | 'spd';
}

export interface ToolSafetyTopic {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'tools' | 'safety_rules' | 'shock_treatment' | 'ppe' | 'earthing_steps';
  description: string;
  descriptionUrdu: string;
  steps?: string[];
  stepsUrdu?: string[];
  diagramType?: 'electrician_tools' | 'ten_safety_rules' | 'cpr_protocol' | 'ppe_equipment' | 'earthing_pit';
}

export interface FaultFindingItem {
  id: string;
  category: 'motor' | 'plc' | 'fire_alarm' | 'lift' | 'ac' | 'vfd' | 'house_wiring';
  categoryTitle: string;
  categoryTitleUrdu: string;
  problem: string;
  problemUrdu: string;
  causes: string[];
  causesUrdu: string[];
  solutions: string[];
  solutionsUrdu: string[];
  toolsNeeded: string[];
  toolsNeededUrdu: string[];
  severity: 'high' | 'medium' | 'low';
}

export interface WorkDiaryEntry {
  id: string;
  customerName: string;
  phone: string;
  workType: string;
  workTypeUrdu: string;
  billAmount: number;
  isPaid: boolean;
  date: string;
  notes: string;
  photoBase64?: string;
  createdAt: number;
}

export interface OwnerNote {
  topicId: string;
  noteText: string;
  updatedAt: number;
}

export interface OwnerRateItem {
  id: string;
  category: 'labour' | 'motor_winding' | 'panels' | 'solar' | 'hvac' | 'emergency';
  categoryTitle: string;
  categoryTitleUrdu: string;
  serviceName: string;
  serviceNameUrdu: string;
  ratePKR: number;
  unit: string;
  unitUrdu: string;
  notes: string;
  notesUrdu: string;
}

export interface AppSettings {
  pin: string;
  isPinEnabled: boolean;
  language: Language;
  showAdmob: boolean;
  soundEffects: boolean;
}
