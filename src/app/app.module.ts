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
import { AfdelingenComponent } from './afdelingen/afdelingen.component';
import { AfdelingLijstComponent } from './afdeling-lijst/afdeling-lijst.component';
import { LedenDetailsComponent } from './leden-details/leden-details.component';

import { FormsModule } from '@angular/forms';
import { AddLidComponent } from './add-lid/add-lid.component'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    AfdelingenComponent,
    AfdelingLijstComponent,
    LedenDetailsComponent,
    AddLidComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    AuthenticationModule,
    AuthenticationRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
