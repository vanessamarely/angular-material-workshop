import { Component, Input, OnInit } from '@angular/core';
import { ListSchema } from "./../../core/models";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: ListSchema;

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

  displayOverlay(): void {
    this.isOverlayDisplayed = true;
  }

  hideOverlay(): void {
    this.isOverlayDisplayed = false;
  }

}
