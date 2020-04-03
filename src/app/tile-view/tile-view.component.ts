import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.css']
})
export class TileViewComponent implements OnInit {

  @Input() showTileContent: boolean;

  wiadomosc = 'tu wyswietlam kafelki XDD';

  constructor() { }

  ngOnInit(): void {
  }


}
