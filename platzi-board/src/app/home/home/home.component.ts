import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../core/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardList: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  
  getPrioritiesTask(PriorityType: string): void {
    this.apiService.getApi()
      .subscribe(
        response => {
          const lists = response['list'];
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
