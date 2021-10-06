import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbConversionComponent } from './components/fb-conversion/fb-conversion.component';
import { GoogleAnalyticsComponent } from './components/google-analytics/google-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    FbConversionComponent,
    GoogleAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
