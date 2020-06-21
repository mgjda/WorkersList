import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../worker';
import { WorkersServerService } from '../workers-server.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() worker: Worker;

  @Output("loadWorkersSignal") loadWorkersSignal: EventEmitter<any> = new EventEmitter();

  constructor(private workersService: WorkersServerService) { }

  ngOnInit(): void {
  }

  deleteWorker(id: number): void {
    this.workersService
        .deleteWorker(id)
        .subscribe(()=> {
          this.loadWorkersSignal.emit();
        });
  }

  isAdminAuthenticated() {
    const uType: string = localStorage.getItem("uType");
    if (uType == 'admin') {
      return true;
    }
    else {
      return false;
    }
  }
}
