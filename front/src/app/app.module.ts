import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeProfileComponent } from "./components/employee-profile/employee-profile.component";
import { EditPersonalInformationsComponent } from "./components/edit-personal-informations/edit-personal-informations.component";
import { EditBankInformationsComponent } from "./components/edit-bank-informations/edit-bank-informations.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditPersonalInformationsComponent,EditBankInformationsComponent]
})
export class AppModule { }