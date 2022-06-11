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
  postTaskList(task: Task): Observable<Task> {
    return this.httpClient
      .post<Task>(`${environment.baseApiUrl}api/tasks`,task)
      .pipe(map((response: Task) => response));
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
