import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-personal-informations',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule,ReactiveFormsModule],
  templateUrl: './edit-personal-informations.component.html',
  styleUrls: ['./edit-personal-informations.component.css']
})
export class EditPersonalInformationsComponent implements OnInit {
  constructor(public dialogRef : MatDialogRef<EditPersonalInformationsComponent>, private service : EmployeeService) { }
  myform = this.service.myform;

  ngOnInit(): void {
  }
  onUpdate()
  {
    if (this.service.myform.valid)
    {
      this.service.updateEmployee(this.service.myform.value.id,this.service.myform.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
        ()=>{
          this.onClose();
          window.location.reload();
        }
      );
    }
    else {
      console.log("Error updating !");
    }
  }
  onClose()
  {
    this.dialogRef.close();
  }

}
