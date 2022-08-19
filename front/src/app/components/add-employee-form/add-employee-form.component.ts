import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material-module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee-form',
  standalone: true,
  imports: [CommonModule, MaterialModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css'],
})
export class AddEmployeeFormComponent implements OnInit {
  constructor(
    private service: EmployeeService,
    private router: Router,
    public dialogRef: MatDialogRef<AddEmployeeFormComponent>
  ) {}
  
  ngOnInit(): void {}
  
  myform = this.service.myform;
  onClose()
  {
    this.dialogRef.close();
  }
  onCreate()
  {
    this.service.createEmployee(this.service.myform.value).subscribe(
      (response)=>{
        console.log("Succes")
      },
      (error)=>{
        console.log(error)
      }
    )
      this.onClose();
      window.location.reload();
  }

}
