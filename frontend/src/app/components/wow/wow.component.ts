import { MaterialModule } from "./../../material-module";
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-wow',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './wow.component.html',
  styleUrls: ['./wow.component.css']
})
export class WowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WowComponent>) { }

  ngOnInit(): void {
  }

}
