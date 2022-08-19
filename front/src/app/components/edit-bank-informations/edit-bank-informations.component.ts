import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-bank-informations',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule,ReactiveFormsModule],
  templateUrl: './edit-bank-informations.component.html',
  styleUrls: ['./edit-bank-informations.component.css']
})
export class EditBankInformationsComponent implements OnInit {

  constructor(private service:EmployeeService, public dialogRef : MatDialogRef<EditBankInformationsComponent>) { }
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
