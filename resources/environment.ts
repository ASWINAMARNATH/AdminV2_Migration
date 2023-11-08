// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const env = "preview";
const DEBUG = true;

export const environment = {
  DEBUG: DEBUG,
  environmentName: env.toUpperCase(),
  baseURL: "https://" + env + ".revature.com",
  coreURL: "https://" + env + ".revature.com/core",
  coreNavigation: "https://" + env + ".revature.com/core/admin/pages/home",
  signupAPI: "https://" + env + "-ms.revature.com/apigateway/security/revtek/public/signup",
  tokenAPI: "https://" + env + ".revature.com/core/resources/user/userDetails",
  normalAPI: "https://" + env + "-ms.revature.com/apigateway/security/revtek/signup",
  caliberUrl: "https://" + env + ".revature.com/caliber/home",
  vpUserEmail: "calibervp@mailinator.com",
  vpUserName: "Vpuser Caliber",
  vpuser: "Automation_Vp",
  manageBatchTrainingAdmin: "caliberuser1@yopmail.com",
  manageBatchQC: "caliberuser6@yopmail.com",
  manageBatchTrainer: "caliberuser10@yopmail.com",

  accessBatchTrainingAdmin: "caliberuser2@yopmail.com",
  accessBatchUserTrainer: "Caliber11 TR11",
  accessBatchTrainer: "caliberuser11@yopmail.com",

  qualityAuditTrainingAdmin: "caliberuser3@yopmail.com",
  qualityAuditQC: "caliberuser7@yopmail.com",

  settingTrainingAdmin: "caliberuser4@yopmail.com",
  settingsQC: "caliberuser8@yopmail.com",

  pdpTrainingAdmin: "caliberuser5@yopmail.com",
  pdpBatchUserTrainer: "Caliber12 TR2",
  pdpTrainer: "caliberuser12@yopmail.com",
  pdpQC: "caliberuser9@yopmail.com",

  trainerUserEmail: "calibertrainer@mailinator.com",
  trainerUserName: "TrainerCaliber Automation",
  trainer: "Automation_trainer",
  qcUserEmail: "caliberqc@mailinator.com",
  qcUserName: "QC Caliber Automation",
  caliberQc: "Automation_QC",
  password: "Pass123$",
  usTimeZone: "(GMT -5:00) US/Eastern",
  indiaTimeZone: "(GMT +5:30) Asia/Kolkata"
};

