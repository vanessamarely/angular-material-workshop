import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardRoutingModule } from './board-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialCdkModule } from './../material-cdk/material-cdk.module';

import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { FormTaskComponent } from './form-task/form-task.component';

@NgModule({
  declarations: [BoardComponent, ListComponent, TaskComponent, FormTaskComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    MaterialCdkModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BoardModule { }
