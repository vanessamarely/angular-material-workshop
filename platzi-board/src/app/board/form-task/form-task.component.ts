import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardSchema } from './../../core/models';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {
  addTask: FormGroup;
  selectedPriority: string;

  priorities: any[] = [
    {value: 'urgent', viewValue: 'Urgente'},
    {value: 'moderate', viewValue: 'Moderado'},
    {value: 'low', viewValue: 'Bajo'}
  ];

  constructor(private fb: FormBuilder) { }

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

}
