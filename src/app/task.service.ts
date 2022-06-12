import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task } from './Task';
import { environment } from 'src/environments/environment';


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

  getTasks(): Observable<TasksResponse> {
    return this.httpClient.get<TasksResponse>(`${environment.baseApiUrl}api/tasks`)
  }
  getTaskList(task: Task): Observable<Task> {
    return this.httpClient
      .post<Task>(`${environment.baseApiUrl}api/tasks`,task)
      .pipe(map((response: Task) => response));
  }
  updateTask(task: Task, id: number): Observable<Task> {
    return this.httpClient
      .put<Task>(`${environment.baseApiUrl}api/tasks/${id}`, task)
      .pipe(map((d: Task) => d));
  }

  deleteTask(id: number) {
    return this.httpClient.delete<Task>(`${environment.baseApiUrl}api/tasks/${id}`);
  }

  getTaskById(id: number): Observable<Task> {
    return this.httpClient
      .get<Task>(`${environment.baseApiUrl}api/tasks/${id}`)
      .pipe(map((response: Task) => response));
  }

}
