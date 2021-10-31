import { Money } from "./money";

const taxLevel1 = 3.6 * Money.W;
const taxLevel1K = 0.03;
const taxLevel2 = 14.4 * Money.W;
const taxLevel2K = 0.1;
const taxLevel3 = 30 * Money.W;
const taxLevel3K = 0.2;
const taxLevel4 = 42 * Money.W;
const taxLevel4K = 0.25;

export function calcTax(beTaxedNumber: number) {
  let ret = 0;

  do {
    if (beTaxedNumber <= taxLevel1) {
      ret = beTaxedNumber * taxLevel1K;
      break;
    }

    if (beTaxedNumber <= taxLevel2) {
      ret = taxLevel1 * taxLevel1K;
      ret += (beTaxedNumber - taxLevel1) * taxLevel2K;
      break;
    }

    if (beTaxedNumber <= taxLevel3) {
      ret = taxLevel1 * taxLevel1K;
      ret += (taxLevel2 - taxLevel1) * taxLevel2K;
      ret += (beTaxedNumber - taxLevel2) * taxLevel3K;
      break;
    }
    
    if (beTaxedNumber <= taxLevel4) {
      ret = taxLevel1 * taxLevel1K;
      ret += (taxLevel2 - taxLevel1) * taxLevel2K;
      ret += (taxLevel3 - taxLevel2) * taxLevel3K;
      ret += (beTaxedNumber - taxLevel3) * taxLevel4K;
      break;
    }
  } while (0);

  return ret;
}
