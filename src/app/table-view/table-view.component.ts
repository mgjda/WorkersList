import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../worker';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'name', 'surname', 'job'];

  dataSource: Worker[];

  @Input() showTableContent: boolean;

  @Output() onDatePicked = new EventEmitter<any>();

  constructor(private workersService: WorkersService) { }

  ngOnInit(): void {
    this.getWorkers();
  }

  getRecord(element: any): void{
    this.onDatePicked.emit(element.name);
  }

  getWorkers(): void {
    this.workersService.getWorkers()
        .subscribe(dataSource => this.dataSource = dataSource);
  }

}
