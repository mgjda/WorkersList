import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Worker } from '../worker';
import { WorkersServerService } from '../workers-server.service';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: [ '../app.component.css', './worker-details.component.css']
})
export class WorkerDetailsComponent implements OnInit {

  worker: Worker;
  selectedId: number;
  loading: boolean;

  constructor(private route: ActivatedRoute, private workersService: WorkersServerService) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap
      .subscribe(params => {
        this.selectedId = +params.get('id');
      });
    this.workersService.getOneWorker(this.selectedId)
      .subscribe(worker => {
        this.worker = worker;
        this.loading = false;
      },
      error => console.log(error));
  }

}