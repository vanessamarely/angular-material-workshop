import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {
  addTask: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.addTask = this.fb.group({
      date : [''],
      priority: [''],
      description : [ '' ]
    });
  }

  onFormAdd(form: any): void {

  }

}
