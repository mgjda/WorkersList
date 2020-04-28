import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../worker';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.css']
})
export class TileViewComponent implements OnInit {

  dataSource: Worker[];

  @Input() showTileContent: boolean;

  @Output() onDatePicked = new EventEmitter<any>();

  constructor(private workersService: WorkersService) { }

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(): void {
    this.workersService.getWorkers()
      .subscribe(dataSource => this.dataSource = dataSource);
  }

  getRecord(element: any): void {
    this.onDatePicked.emit(element);
  }

}
