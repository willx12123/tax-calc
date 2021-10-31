import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CalculatorComponent } from "./pages/calculator/calculator.component";

const routes: Routes = [
  { path: "calc", component: CalculatorComponent },
  { path: "", pathMatch: "full", redirectTo: "calc" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
