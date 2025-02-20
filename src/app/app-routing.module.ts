import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidencedetailsComponent } from './residences/residences/residencedetails/residencedetails.component';

const routes: Routes = [
  {path : '' , redirectTo :'/home',pathMatch : 'full'},
  {path :'residence',component:ResidencesComponent},
  {path :'details/:id',component:ResidencedetailsComponent},
  {path :'home',component:HomeComponent},
  {path :'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
