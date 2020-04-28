import { Component, OnInit, Input } from '@angular/core';
import { Worker } from '../worker';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() worker: Worker;

  constructor() { }

  ngOnInit(): void {
  }

}
