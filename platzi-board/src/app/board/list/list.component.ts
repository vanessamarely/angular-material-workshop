import { Component, Input, OnInit } from '@angular/core';
import { CardSchema, ListSchema } from "./../../core/models";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: ListSchema;
  card: CardSchema;
  isOverlayDisplayed = false;
  readonly overlayOptions: Partial<CdkConnectedOverlay> = {
    hasBackdrop: true,
    positions: [
      { originX: 'start', originY: 'top', overlayX: 'start',  overlayY: 'top'}
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  displayOverlay(event?: any): void {
    this.isOverlayDisplayed = true;
    if(!!event){
      this.card = {
        date: event.date,
        id: event.id,
        description: event.description,
        priority: event.priority
      };
    }else{
      this.card = null;
    }
  }

  hideOverlay(): void {
    this.isOverlayDisplayed = false;
  }

}
