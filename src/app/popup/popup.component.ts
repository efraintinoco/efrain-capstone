import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../Task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  taskForm: FormGroup ;
  tasks: Task[] =  [];
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title:[''],
      date: [''],
      comment: [''],

    });
    console.log()
    this.popupTask();
  }

  popupTask() {
    this.taskService.getTaskById(this.data.id).subscribe(
      (d: Task) => {
        this.taskForm.controls['title'].setValue(this.data.title)
      this.taskForm.controls['date'].setValue(this.data.date);
      this.taskForm.controls['comment'].setValue(this.data.comment)
    })
    console.log(this.data)
  }
  updateTask() {
    this.taskService.updateTask(this.taskForm.value, this.data.id).subscribe(
      (d) => {
        this.dialogRef.close();
      },
      (error) => console.error(error)
    );
    this.router.navigateByUrl('/');
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.data.id).subscribe(
      (d) => {
        console.log(d);
        this.dialogRef.close();
        this.router.navigateByUrl('/');
      },
      (error) => console.error(error)
    );
  }
}
