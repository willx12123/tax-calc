import { Component, OnInit } from "@angular/core";

import { calcTax } from "./tax-level";

const START_CALC_TAX_NUMBER = 5000 * 12;

const ENDOWMENT_INSURANCE = 0.08;
const MEDICAL_INSURANCE = 0.02;
const UNEMPLOYMENT_INSURANCE = 0.005;
const HOUSING_ACCUMULATION_FUNDS = 0.12;

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent implements OnInit {
  total = 0;
  salaryMonthly = 0;
  housingK = 12;
  specialReduce = 0;

  tax = 0;
  insuranceAndHousingPerMonth = 0;
  get insuranceAndHousingPerYear(): number {
    return this, this.insuranceAndHousingPerMonth * 12;
  }

  get actuallyGet(): number {
    return this.total - this.insuranceAndHousingPerYear - this.tax;
  }

  constructor() {}

  ngOnInit(): void {}

  calc() {
    this.insuranceAndHousingPerMonth = this.calcInsuranceAndHousing(this.salaryMonthly);
    const beTaxedNumber =
      this.total -
      START_CALC_TAX_NUMBER -
      this.insuranceAndHousingPerMonth * 12 -
      this.specialReduce;

    this.tax = calcTax(beTaxedNumber);
  }

  private calcInsuranceAndHousing(salaryMonthly: number) {
    return (
      salaryMonthly *
      (ENDOWMENT_INSURANCE +
        MEDICAL_INSURANCE +
        UNEMPLOYMENT_INSURANCE +
        HOUSING_ACCUMULATION_FUNDS)
    );
  }
}
