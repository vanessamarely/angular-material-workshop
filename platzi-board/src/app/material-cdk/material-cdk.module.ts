import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

//CDK
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    DragDropModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    DragDropModule,
  ]
})
export class MaterialCdkModule { }
