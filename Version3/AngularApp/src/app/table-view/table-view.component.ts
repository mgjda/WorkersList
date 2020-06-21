import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../worker';
import { WorkersServerService } from '../workers-server.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'name', 'surname', 'job', 'action'];

  @Input() workers: Worker[];  

  @Input() showTableContent: boolean;

  @Output("loadWorkers") loadWorkers: EventEmitter<any> = new EventEmitter();

  constructor(private workersService: WorkersServerService) {

  }

  ngOnInit(): void {
  }

  deleteWorker(id: number): void {
    this.workersService
        .deleteWorker(id)
        .subscribe(()=> {
          this.loadWorkers.emit();
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
