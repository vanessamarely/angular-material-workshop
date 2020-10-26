import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardSchema } from './../../core/models';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  addTask: FormGroup;
  selectedPriority: string;

  priorities: any[] = [
    {value: 'urgent', viewValue: 'Urgente'},
    {value: 'moderate', viewValue: 'Moderado'},
    {value: 'low', viewValue: 'Bajo'}
  ];

  constructor(private fb: FormBuilder, private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.setForm();
    this.selectedPriority = '';
  }

  setForm(): void {
    this.addTask = this.fb.group({
      date : [new  Date(), Validators.required],
      priority: ['urgent', Validators.required],
      description : [ '', Validators.required ]
    });
  }

  onFormAdd(form: CardSchema): void {
    if (this.addTask.valid) {
      
    }
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
