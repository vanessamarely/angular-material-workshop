import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardSchema, ListSchema } from "./../../core/models";
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { TasksService } from './../../core/services';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() card: CardSchema;
  @Input() list?: ListSchema;
  @Output() editTask: EventEmitter<CardSchema> = new EventEmitter();

  constructor(public dialog: MatDialog, public tasksService: TasksService) { }

  ngOnInit(): void {
  }

  handleEditTask(card){
    this.editTask.emit(card);
  }

  removeTask(cardId: string): void {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.tasksService.removeTask(cardId, this.list);
    });
  }

}
