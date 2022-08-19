import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material-module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-form',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css'],
})
export class AddEmployeeFormComponent implements OnInit {
  constructor(
    private service: EmployeeService,
    private router: Router,
    public dialogRef: MatDialogRef<AddEmployeeFormComponent>
  ) {}
  myform = this.service.myform;

  ngOnInit(): void {}
  
  onClose()
  {
    this.dialogRef.close();
  }

}
