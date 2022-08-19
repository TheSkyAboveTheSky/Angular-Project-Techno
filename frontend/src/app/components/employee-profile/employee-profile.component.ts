import { WowComponent } from "./../wow/wow.component";
import { ActivatedRoute , Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./../../material-module";
import { EditPersonalInformationsComponent } from "./../edit-personal-informations/edit-personal-informations.component";
import { Component , OnInit } from "@angular/core";
import { EmployeeModel } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog';
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports :[CommonModule,MaterialModule,FormsModule],
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css','./style.css'],
})
export class EmployeeProfileComponent implements OnInit {
  employee!: EmployeeModel;
  id: string="";
  constructor(
    private service: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

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
  onEdit(row:any)
  {
    this.service.fillEditForm(row);
    const config : MatDialogConfig = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '40%';
    config.height = '40%';
    this.dialog.open(WowComponent,config);

  }

}
