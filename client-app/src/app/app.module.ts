import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbConversionComponent } from './components/fb-conversion/fb-conversion.component';
import { GoogleAnalyticsComponent } from './components/google-analytics/google-analytics.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FbConversionComponent,
    GoogleAnalyticsComponent,
    LoginFormComponent,
    HomeComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
