import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseurl = "https://app.microenv.com/backend/key/5d4c61b55d704691c11652/rest/api/tasks/"

  constructor(private http: HttpClient) { }

  public getTasks() : Observable<any> {
    return this.http.get(this.getUrl())
      .pipe(map((response: Response) => response));
  }

  private getUrl() {
    return `${this.baseurl}`;
  }
}
