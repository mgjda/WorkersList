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

  public disableRowEvent: boolean = false;

  @Input() showTableContent: boolean;

  @Output() onDatePicked = new EventEmitter<any>();

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

  getRecord(element: any): void {
    if (!this.disableRowEvent){
      this.onDatePicked.emit(element);
      console.log("EVENT");
    }
    
  }

  mouseUp(): void{
    this.disableRowEvent = false;
    console.log("Up " + this.disableRowEvent);
  }

  mouseDown(): void{
    this.disableRowEvent = true;
    console.log("Down " + this.disableRowEvent);
  }
}
