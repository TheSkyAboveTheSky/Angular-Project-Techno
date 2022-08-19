import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css','./style.css'],
})
export class EmployeeProfileComponent implements OnInit {
  employee!: EmployeeModel;
  id: string="";
  constructor(
    private service: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
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
}
