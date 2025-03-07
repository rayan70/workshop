import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ResidencesComponent } from './residences/residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceDetailsComponent } from './residences/residences/residencedetails/residencedetails.component';
import { AddAppartmentComponent } from './appartment/add-appartment/add-appartment.component';

const routes: Routes = [
  {path : '' , redirectTo :'/home',pathMatch : 'full'},
  {path :'residence',component:ResidencesComponent},
  {path :'details/:id',component:ResidenceDetailsComponent},
  {path :'home',component:HomeComponent},
  {path :'**', component:NotfoundComponent},
  {path :'add-appartment',component:AddAppartmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
