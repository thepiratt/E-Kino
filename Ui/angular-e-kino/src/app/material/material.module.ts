import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatButtonModule} from '@angular/material/button'
import{MatIconModule} from '@angular/material/icon'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'
import{MatCheckboxModule} from '@angular/material/checkbox'
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import{MatTabsModule} from'@angular/material/tabs'
import{MatCardModule} from'@angular/material/card'
import{MatProgressBarModule} from'@angular/material/progress-bar'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { DragDropModule} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips'


@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
MatButtonModule,
MatIconModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatCheckboxModule,
MatListModule,
MatTableModule,
MatProgressSpinnerModule,
MatDatepickerModule,
MatNativeDateModule,
MatTabsModule,
MatCardModule,
MatProgressBarModule,
MatAutocompleteModule,
DragDropModule,
MatChipsModule
],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
