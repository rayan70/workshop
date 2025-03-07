import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences/residences.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceDetailsComponent } from './residences/residences/residencedetails/residencedetails.component';
import { AddAppartmentComponent } from './appartment/add-appartment/add-appartment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    AppComponent,
 
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ResidencesComponent,
    NotfoundComponent,
    ResidenceDetailsComponent,
    AddAppartmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
