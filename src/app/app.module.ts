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



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialComponents = [
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [
    AppComponent
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
