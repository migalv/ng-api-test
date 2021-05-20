import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { apiBecarios } from './services/api_becarios.service';

// Material components
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

const materialComponents = [
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatExpansionModule,
  MatDialogModule,
  MatToolbarModule,
  MatInputModule,
  FormsModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    materialComponents
  ],
  providers: [apiBecarios],
  bootstrap: [AppComponent]
})
export class AppModule { }
