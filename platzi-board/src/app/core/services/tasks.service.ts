import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardSchema, ListSchema } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private readonly boardList = new BehaviorSubject<ListSchema[]>([]);
  readonly list$ = this.boardList.asObservable();
  readonly getBoardList$ = this.list$.pipe(
    map(list => list)
  );
  
  constructor(private apiService: ApiService) { 
    this.loadInitialData();
  }

  /* Load initial data to render in a component */
  loadInitialData(): any {
    return this.apiService.getApi()
      .subscribe(response => {
        if(!!response) {
          this.boardList.next(response['list']);
        }
      })  
  }

  /* getter list of Board */
  get list(): ListSchema[] {
    return this.boardList.getValue();
  }

  /* setter list of Board */
  set list(value: ListSchema[]) {
    this.boardList.next(value);
  }

  /* Add new card to board list */
  addCard(data: CardSchema, list: ListSchema): void  {
    const card = data;
    const elementsIndex = 
      this.list.findIndex(element => element.id == list.id);
    this.list[elementsIndex].cards.push(card);
  }

  /* Edit card on list */
  updateTask(data: CardSchema, list: ListSchema): void {
    const cards = list.cards.map(element => {
      if(element.id === data.id){
        element.date = new Date(data.date);
        element.description = data.description;
        element.priority = data.priority;
      }
      return element;
    });
    const elementsIndex = 
      this.list.findIndex(element => element.id == list.id);
    this.list[elementsIndex].cards = cards;
  } 

  /* Remove a card of board list */
  removeTask(dataId: string, list: ListSchema): void {
    const elementsIndex = 
      this.list.findIndex(element => element.id == list.id);
    const cards = this.list[elementsIndex].cards.filter(card => card.id !== dataId);
    this.list[elementsIndex].cards = cards;
  }
}
