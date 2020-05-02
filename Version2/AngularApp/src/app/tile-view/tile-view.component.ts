import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../worker';
import { WorkersServerService } from '../workers-server.service';

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.css']
})
export class TileViewComponent implements OnInit {

  public dataSource: Worker[];

  public loading: boolean;

  @Input() showTileContent: boolean;

  @Output() onDatePicked = new EventEmitter<any>();

  constructor(private workersService: WorkersServerService) { }

  ngOnInit(): void {
    this.loading = true;
    this.workersService.getWorkers()
                        .subscribe(workers => {
                          this.dataSource = workers;
                          this.loading = false;
                        },
                          error => console.log(error));
  }

  getRecord(element: any): void {
    this.onDatePicked.emit(element);
  }
}

