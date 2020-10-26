import { Component, Input, OnInit } from '@angular/core';
import { CardSchema } from "./../../core/models";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() card: CardSchema;

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

  displayOverlay(): void {
    this.isOverlayDisplayed = true;
  }

  hideOverlay(): void {
    this.isOverlayDisplayed = false;
  }

  removeTask(cardId: string): void {
    console.log('Eliminar tarea');
  }

}
