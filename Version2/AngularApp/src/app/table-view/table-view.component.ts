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

  public workers: Worker[] = [];  

  public loading: boolean;

  @Input() showTableContent: boolean;

  constructor(private workersService: WorkersServerService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.workersService.getWorkers()
                        .subscribe(workers => {
                          this.workers = workers;
                          this.loading = false;
                        },
                          error => console.log(error));
  }
}
