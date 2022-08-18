import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  exports: [MatTableModule, 
            MatPaginatorModule, 
            MatButtonModule,
            MatIconModule, 
            MatCardModule,
            MatToolbarModule,
            MatGridListModule,
            MatInputModule,
            MatFormFieldModule,
            MatRadioModule,
            MatSelectModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
          ],
})
export class MaterialModule {}

