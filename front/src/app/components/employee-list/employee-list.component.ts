import { MaterialModule } from "src/app/material-module";
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
