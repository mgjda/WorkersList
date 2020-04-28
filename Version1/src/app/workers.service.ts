import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Worker } from './worker';

export const WORKERS_DATA: Worker[] = [
  { id: 1, avatar: 'assets\\avatar_1.png', name: 'Katarzyna', surname: 'Robak', job: 'Obsługa klienta' },
  { id: 2, avatar: 'assets\\avatar_2.png', name: 'Daniel', surname: 'Ryba', job: 'Sprzedawca' },
  { id: 3, avatar: 'assets\\avatar_3.png', name: 'Henryk', surname: 'Kania', job: 'Dyrektor Finansowy' },
  { id: 4, avatar: 'assets\\avatar_4.png', name: 'Laura', surname: 'Ramka', job: 'HRówka' },
  { id: 5, avatar: 'assets\\avatar_5.png', name: 'Grzegorz', surname: 'Pudełko', job: 'Kelner' },
];

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  private _todos: BehaviorSubject<Worker[]> = new BehaviorSubject(WORKERS_DATA);

  public readonly todos: Observable<Worker[]> = this._todos.asObservable();

  constructor() { }

  public getWorkers() {
    return this.todos;
  }
}
