import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FbConversionComponent } from './components/fb-conversion/fb-conversion.component';
import { GoogleAnalyticsComponent } from './components/google-analytics/google-analytics.component';

const routes: Routes = [
  {path: "fb-conversion", component: FbConversionComponent },
  {path: "google-analytics", component: GoogleAnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
