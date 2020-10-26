import { Component, Input, OnInit } from '@angular/core';
import { CardSchema } from "./../../core/models";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() card: CardSchema;
  constructor() { }

  ngOnInit(): void {
  }

}
