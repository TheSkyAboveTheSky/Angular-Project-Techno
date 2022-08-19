import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute , Router } from "@angular/router";
import { MaterialModule } from "./../../material-module";
import { EmployeeModel } from 'src/app/models/employee';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { EditPersonalInformationsComponent } from '../edit-personal-informations/edit-personal-informations.component';
import { EditBankInformationsComponent } from '../edit-bank-informations/edit-bank-informations.component';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  employee!: EmployeeModel;
  id: string="";
  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router : Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getId();
    this.getEmployee(this.id);
  }

  getId():void
  {
    this.route.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    )
  }
  getEmployee(id:string)
  {
    this.service.getEmployeeById(id)
      .subscribe(
        (employee)=>{
          this.employee = employee;
          console.log(this.employee);
        },
        (error) => {
          console.log(error);
        }
      )
  }
  // Dialog
  onEditPersonal(row:any)
  {
    try{
      this.service.fillEditForm(row);
      const config : MatDialogConfig = new MatDialogConfig();
      config.autoFocus = true;
      config.width = "60%";
      config.height = "50%";
      this.dialog.open(EditPersonalInformationsComponent,config);
    }catch(err){
      alert(err);
    }

  }
  onEditBank(row:any)
  {
    try{
      this.service.fillEditForm(row);
      const config : MatDialogConfig = new MatDialogConfig();
      config.autoFocus = true;
      config.width = "60%";
      config.height = "30%";
      this.dialog.open(EditBankInformationsComponent,config);
    }catch(err){
      alert(err);
    }
  }

}
