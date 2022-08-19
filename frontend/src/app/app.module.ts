import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { EditPersonalInformationsComponent } from './components/edit-personal-informations/edit-personal-informations.component';
import { EditBankInformationsComponent } from './components/edit-bank-informations/edit-bank-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfileComponent,
    NotfoundComponent,
    EditPersonalInformationsComponent,
    EditBankInformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
