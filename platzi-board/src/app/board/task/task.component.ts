import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  card: any =
  {
    id: "1",
    description: "Tarea 1", 
    date: "10/26/20",
    priority: "urgent"
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
