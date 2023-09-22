import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    AuthenticationModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
