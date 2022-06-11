import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../Task';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  taskForm: FormGroup | any;
  tasks: Task[] =  [];
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private fb: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.popupTask();
  }

  popupTask() {
    this.taskService.getTaskById(this.data.id).subscribe(
      (d: Task) => {
        this.taskForm.controls['title'].setValue(d.title);
        this.taskForm.controls['comment'].setValue(d.comment);
        this.taskForm.controls['date'].setValue(
          new Date(d.date).toISOString()
        );
        this.taskForm.controls['comment'].setValue(d.comment);
      },
      (error: any) => console.error(error)
    );
  }
  updateTask() {
    this.taskService.updateTask(this.taskForm.value).subscribe(
      (d) => {
        this.dialogRef.close();
      },
      (error) => console.error(error)
    );
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.data.id).subscribe(
      (d) => {
        console.log(d);
        this.dialogRef.close();
      },
      (error) => console.error(error)
    );
  }
}
