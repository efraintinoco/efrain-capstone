import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task } from './Task';
import { environment } from 'src/environments/environment';

const httpheaders= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

type TasksResponse = {
  tasks: Task[]
}
type TaskResponse = {
  task:Task
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  getTaskList(): Observable<TasksResponse> {
    return this.httpClient.get<TasksResponse>(`${environment.baseApiUrl}api/tasks`)
  }
  deleteTask(id: number) {
    return this.httpClient.delete<Task>(`${environment.baseApiUrl}api/tasks/${id}`);
  }

  postTaskList(task: Task): Observable<Task> {
    return this.httpClient
      .post<Task>(`${environment.baseApiUrl}api/tasks`,task)
      .pipe(map((response: Task) => response));
  }

  updateTask(task: Task, id: number): Observable<Task> {
    return this.httpClient.put<Task>(`${environment.baseApiUrl}api/tasks/${id}`, task, httpheaders)
    .pipe(map((response: Task) => response));
  }

  getTaskById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${environment.baseApiUrl}api/tasks/${id}`)
    .pipe(map((response: Task) => response));
  }
}
