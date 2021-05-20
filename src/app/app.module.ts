import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { apiBecarios } from './services/api_becarios.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Dialogs
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

// Material
import { MaterialModule } from './material/material.module';

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
    MaterialModule,
  ],
  providers: [apiBecarios],
  bootstrap: [AppComponent]
})
export class AppModule { }
