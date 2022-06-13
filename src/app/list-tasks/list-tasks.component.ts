import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] =  [];


  constructor(private taskService: TaskService, public dialog:MatDialog) { }

  ngOnInit(): void {

    this.getTasks();
  }
  getTasks() {
return  this.taskService.getTaskList().subscribe(response => {
  this.tasks = response.tasks
});
  }
  onOpenDialog(task: Task) {
    const dialogRef = this.dialog.open(PopupComponent, {
    
      data: task,

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("the dialoged closed")
      this.getTasks();

    });

  }
}
