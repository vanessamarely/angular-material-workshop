import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../core/services';
import { TasksService } from './../../core/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardList: any;

  constructor(private apiService: ApiService, private tasksService: TasksService) { }

  ngOnInit(): void {
  }
  
  getPrioritiesTask(PriorityType: string): void {
    this.tasksService.getBoardList$
      .subscribe(
        response => {
          const lists = response;
          let cards = [];
          lists.map(element => {
            element.cards.map(card => {
              if(card.priority == PriorityType){
                cards.push(card)
              }
            });
          });
          this.cardList = cards;
        },
        error => (console.log('Ups! we have an error: ', error))
    );
  }

}
