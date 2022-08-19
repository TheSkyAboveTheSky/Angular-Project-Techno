import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-personal-informations',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './edit-personal-informations.component.html',
  styleUrls: ['./edit-personal-informations.component.css']
})
export class EditPersonalInformationsComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<EditPersonalInformationsComponent>, private service : EmployeeService) { }

  ngOnInit(): void {
  }
  onUpdate()
  {
    if (this.service.myform.valid)
    {
      this.service.updateEmployee(this.service.myform.value._id,this.service.myform.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    else {
      console.log("Error updating !");
    }
  }

}
