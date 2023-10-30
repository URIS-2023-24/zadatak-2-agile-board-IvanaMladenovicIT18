import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseurl = "https://app.microenv.com/backend/key/5d4c61b55d704691c11652/rest/api/tasks/"

  constructor(private httpClient: HttpClient) { }

  public getTasks() : Observable<any> {
    return this.httpClient.get(this.baseurl)
    .pipe(map((response : Response) => response));
  }
}
