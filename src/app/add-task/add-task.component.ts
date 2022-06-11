import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      comments: ['', Validators.required],
    });

  }

  addTask() {
    this.taskService.postTaskList(this.taskForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
