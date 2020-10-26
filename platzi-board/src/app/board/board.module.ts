import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { SharedModule } from './../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [BoardComponent, ListComponent, TaskComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule
  ]
})
export class BoardModule { }
