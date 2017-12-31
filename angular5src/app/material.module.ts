import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule,
    MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatTableModule,
    MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule,
    MatProgressSpinnerModule, MatCardModule, MatExpansionModule,
    MatGridListModule, MatIconModule, MatDialogModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatCheckboxModule, MatRadioModule,
    MatButtonToggleModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule,
    MatOptionModule, MatSelectModule],

  exports: [MatButtonModule, MatToolbarModule, MatInputModule,
    MatProgressSpinnerModule, MatCardModule, MatExpansionModule,
    MatGridListModule, MatIconModule, MatDialogModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatCheckboxModule, MatRadioModule,
    MatButtonToggleModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule,
    MatOptionModule, MatSelectModule],
})
export class MaterialModule { }
