import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../worker';
import { WorkersServerService } from '../workers-server.service';

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.css']
})
export class TileViewComponent implements OnInit {

  //public dataSource: Worker[];
  @Input() workers: Worker[]; 

  @Input() showTileContent: boolean;

  @Output("loadWorkers") loadWorkers: EventEmitter<any> = new EventEmitter();

  constructor(private workersService: WorkersServerService) { }

  ngOnInit(): void {
  }

  loadWorkersSignal(){
    this.loadWorkers.emit();
  }


}

