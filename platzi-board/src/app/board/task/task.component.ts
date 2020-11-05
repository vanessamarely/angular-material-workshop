import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardSchema } from "./../../core/models";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() card: CardSchema;
  @Output() editTask: EventEmitter<CardSchema> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleEditTask(card: CardSchema){
    this.editTask.emit(card);
  }

}
