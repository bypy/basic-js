const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNumber = parseInt(sampleActivity);
  if (
    isNaN(sampleActivityNumber) ||
    typeof sampleActivity !== 'string' ||
    sampleActivityNumber <= 0 ||
    sampleActivityNumber > 15
  ) return false;
    
  let rateConstant = Math.LN2 / HALF_LIFE_PERIOD;
  let integratedRate = MODERN_ACTIVITY / parseInt(sampleActivity);
  
  return Math.ceil(Math.log2(integratedRate) / rateConstant);
};