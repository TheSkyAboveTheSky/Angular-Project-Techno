import { MaterialModule } from "./../../material-module";
import { CommonModule } from "@angular/common";
import { Component , OnInit } from "@angular/core";
@Component({
  selector: 'app-edit-bank-informations',
  standalone:true,
  imports :[ CommonModule,MaterialModule],
  templateUrl: './edit-bank-informations.component.html',
  styleUrls: ['./edit-bank-informations.component.css']
})
export class EditBankInformationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
