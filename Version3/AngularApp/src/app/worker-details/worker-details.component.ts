import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Worker } from '../worker';
import { WorkersServerService } from '../workers-server.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['../app.component.css', './worker-details.component.css']
})
export class WorkerDetailsComponent implements OnInit {

  worker: Worker;
  selectedId: number;
  loading: boolean;
  noData: boolean;
  edit: boolean;

  avatars = [
    'assets\\avatar_1.png',
    'assets\\avatar_2.png',
    'assets\\avatar_3.png',
    'assets\\avatar_4.png',
    'assets\\avatar_5.png'
  ];

  constructor(private route: ActivatedRoute, private workersService: WorkersServerService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.selectedId = +params.get('id');
      });
    this.loadWorker();
  }

  loadWorker(): void {
    this.loading = true;
    this.workersService.getOneWorker(this.selectedId)
      .subscribe(worker => {
        this.worker = worker;
        this.loading = false;
      },
        error => console.log(error));
  }
  deleteWorker(id: number): void {
    this.workersService
      .deleteWorker(id)
      .subscribe(() => {
        this.noData = true;
        this.loadWorker();
      });
  }
  showEditForm() {
    this.edit = true;
  }
  showDetailsForm() {
    this.edit = false;
  }
  public onSubmit() {
    //console.log(this.worker);
    this.workersService.updateWorker(this.selectedId,this.worker).subscribe(result => console.log(result));
  }

  getErrorMessage() {
    return 'To pole musi być wypełnione';
  }

  isAdminAuthenticated() {
    const uType: string = localStorage.getItem("uType");
    if (uType == 'admin') {
      return true;
    }
    else {
      return false;
    }
  }
  openSnackBar() {
    this._snackBar.open("Worker edited","Ok" , {
      duration: 2000,
    });
  }
}