import { Component, OnInit } from '@angular/core';
import { ListSchema } from './../../core/models';
import { ApiService } from './../../core/services';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists: ListSchema[];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList(): void {
    /* Data from Api */
    this.apiService.getApi()
      .subscribe(
        response => this.lists = response['list'],
        error => (console.log('Ups! we have an error: ', error))
    );
  }

}
