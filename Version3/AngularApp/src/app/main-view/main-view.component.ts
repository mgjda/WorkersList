import { Component, OnInit, Output } from '@angular/core';
import { WorkersServerService } from '../workers-server.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {

  showTableVar: boolean = true;
  showTileVar: boolean = false;
  spanVar: string = 'Nie wybrano żadnego obiektu';
  loading: boolean;
  workers: Worker[] = []; 

  constructor(private workersService: WorkersServerService) { }

  ngOnInit(): void {
    this.loadWorkers();
  }

  showTable() {
    this.showTableVar = true;
    this.showTileVar = false;
  }

  showTile() {
    this.showTableVar = false;
    this.showTileVar = true;
  }

  loadWorkers(){
    this.loading = true;
    this.workersService.getWorkers()
                        .subscribe(workers => {
                          this.workers = workers;
                          this.loading = false;
                        },
                          error => console.log(error));
  }

}
