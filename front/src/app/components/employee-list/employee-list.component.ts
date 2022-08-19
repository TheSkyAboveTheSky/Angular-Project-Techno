import { MaterialModule } from 'src/app/material-module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmployeeFormComponent } from '../add-employee-form/add-employee-form.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees!: EmployeeModel[];

  constructor(
    private service: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllEmployess();
  }
  getAllEmployess() {
    this.service.getAllEMployees().subscribe(
      (response) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error) => {
        alert(error);
      }
    );
  }
  addEmployee() {
    try {
      this.service.initilaizeForm();
      const config: MatDialogConfig = new MatDialogConfig();
      config.autoFocus = true;
      config.width = '70%';
      config.height = '80%';
      this.dialog.open(AddEmployeeFormComponent, config);
    } catch (err) {
      alert(err);
    }
  }
}
