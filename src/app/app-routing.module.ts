import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AfdelingenComponent } from './afdelingen/afdelingen.component';
import { AfdelingLijstComponent } from './afdeling-lijst/afdeling-lijst.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'afdelingen', component: AfdelingenComponent },
  { path: 'afdelingLijst', component: AfdelingLijstComponent },
  { 
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
