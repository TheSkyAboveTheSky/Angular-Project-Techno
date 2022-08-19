import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:"employees/:id",component:EmployeeProfileComponent},
  {path:"employees",component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
