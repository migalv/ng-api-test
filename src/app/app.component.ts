import { Component } from '@angular/core';
import { Becario } from './models/becario';
import { apiBecarios } from './services/api_becarios.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  becarios: Becario[];

  constructor(private _apiBecarios: apiBecarios, public dialog: MatDialog,) {
    this.becarios = [];
  }

  ngOnInit() {
    this._apiBecarios.getBecarios().subscribe(data => {
      data.forEach((becario: any) => {
        this.becarios.push(
          new Becario(
            becario.id,
            becario.nombre,
            becario.apellidos,
            becario.puesto,
            becario.horario,
            becario.responsables,
            becario.fechaalta,
          ),
        );
      });
    });
  }

  /** Will delete a becario from the data base */
  deleteBecario(id: string) {
    let confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent,);

    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this._apiBecarios.deleteBecario(id).subscribe(data => {
          console.log(`Becario with id ${id} deleted successfully`);
        });
      }
    });
  }

  /** Will open a dialog to edit a becario from the data base */
  editBecario(becario: Becario) {
    let editDialogRef = this.dialog.open(EditDialogComponent, { data: { becario: becario } });

    editDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._apiBecarios.editBecario(result).subscribe(data => {
          console.log(`Becario with id ${becario.id} updated successfully`);
        });
      }
    });
  }
}
