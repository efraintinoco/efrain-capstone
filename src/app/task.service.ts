import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task } from './Task';

type TasksResponse = {
  tasks: Task[]
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url: string ='../assets/tasks.json';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<TasksResponse> {
    return this.httpClient.get<TasksResponse>(this.url);
   }

}
