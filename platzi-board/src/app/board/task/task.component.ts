import { Component, Input, OnInit } from '@angular/core';
import { CardSchema, ListSchema } from "./../../core/models";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { TasksService } from './../../core/services';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() card: CardSchema;
  @Input() list?: ListSchema;

  isOverlayDisplayed = false;
  readonly overlayOptions: Partial<CdkConnectedOverlay> = {
    hasBackdrop: true,
    positions: [
      { originX: 'start', originY: 'top', overlayX: 'start',  overlayY: 'top'}
    ]
  };

  constructor(public dialog: MatDialog, public tasksService: TasksService) { }

  ngOnInit(): void {
  }

  displayOverlay(): void {
    this.isOverlayDisplayed = true;
  }

  hideOverlay(): void {
    this.isOverlayDisplayed = false;
  }

  removeTask(cardId: string): void {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.tasksService.removeTask(cardId, this.list);
    });
  }

}
