import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FbConversionComponent } from './components/fb-conversion/fb-conversion.component';
import { GoogleAnalyticsComponent } from './components/google-analytics/google-analytics.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", canActivate: [AuthGuardGuard], component: HomeComponent },
  { path: "fb-conversion", canActivate: [AuthGuardGuard], component: FbConversionComponent },
  { path: "google-analytics", canActivate: [AuthGuardGuard], component: GoogleAnalyticsComponent },
  { path: "login", component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
