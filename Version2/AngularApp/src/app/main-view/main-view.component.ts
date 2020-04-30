import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {

  showTableVar: boolean = true;
  showTileVar: boolean = false;
  spanVar: string = 'Nie wybrano żadnego obiektu';

  constructor() { }

  ngOnInit(): void {
  }

  showTable() {
    this.showTableVar = true;
    this.showTileVar = false;
  }

  showTile() {
    this.showTableVar = false;
    this.showTileVar = true;
  }

  public doSomething($event) {
    this.spanVar = 'Wybrano osobę ' + $event.name + " o id = " + $event.id;
  }

}
