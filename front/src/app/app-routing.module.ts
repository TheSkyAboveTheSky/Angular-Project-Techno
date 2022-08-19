import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:"employees/:id",component:EmployeeProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
