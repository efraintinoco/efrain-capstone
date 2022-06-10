import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task } from './Task';
import { environment } from 'src/environments/environment';


type TasksResponse = {
  tasks: Task[]
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<TasksResponse> {
    return this.httpClient.get<TasksResponse>(`${environment.baseApiUrl}api/tasks`)
   }

}
