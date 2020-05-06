import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from './worker';

@Injectable({
  providedIn: 'root'
})
export class WorkersServerService {
  private url = "https://localhost:44336/";

  constructor(private http: HttpClient) { 

  }

  public getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.url + 'Workers');
  }

  public deleteWorker(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url + 'Workers/' + id);
  }

  public getOneWorker(id: number): Observable<Worker> {
    return this.http.get<Worker>(this.url + 'Workers/' + id);
  }

  public updateWorker(id: number, worker: Worker): Observable<boolean> {
    return this.http.put<boolean>(this.url + 'Workers/' + id, worker);
  }

  public postWorker(worker: Worker): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'Workers', worker);
  }
}
