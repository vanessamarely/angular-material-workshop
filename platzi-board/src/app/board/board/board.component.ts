import { Component, OnInit } from '@angular/core';
import { ListSchema } from './../../core/models';
import { ApiService } from './../../core/services';
import { TasksService } from './../../core/services/tasks.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists: ListSchema[];
  
  constructor(private apiService: ApiService, private tasksService: TasksService) { }

  ngOnInit(): void {
    // this.getDataList();
    this.getDataStored();
  }

  getDataList(): void {
    /* Data from Api */
    this.apiService.getApi()
      .subscribe(
        response => this.lists = response['list'],
        error => (console.log('Ups! we have an error: ', error))
    );
  }

  getDataStored(): void {
    this.tasksService.getBoardList$
      .subscribe(
        response => this.lists = response,
        error => (console.log('Ups! we have an error: ', error))
    );
  }

}
