import { NgModule } from '@angular/core';

// Material components
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const MaterialComponents = [
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
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
