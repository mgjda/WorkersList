import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface PeriodicElement {
  avatar: string;
  name: string;
  surname: string;
  job: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { avatar: '1', name: 'Hydrogen', surname: 'Hydrogen', job: 'H' },
  { avatar: '2', name: 'Helium', surname: 'Hydrogen', job: 'He' },
  { avatar: '3', name: 'Lithium', surname: 'Hydrogen', job: 'Li' },
  { avatar: '4', name: 'Beryllium', surname: 'Hydrogen', job: 'Be' },
  { avatar: '5', name: 'Boron', surname: 'Hydrogen', job: 'B' },
];

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'name', 'surname', 'job'];
  dataSource = ELEMENT_DATA;

  @Input() showTableContent: boolean;

  n: string ='gowno';

  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  getRecord(element){
    this.onDatePicked.emit(element.name);
  }

}
