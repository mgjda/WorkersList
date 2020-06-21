import { Component, OnInit, Output } from '@angular/core';
import { WorkersServerService } from '../workers-server.service';
import { Worker } from '../worker';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

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

  constructor(private workersService: WorkersServerService,
    private jwtHelper: JwtHelperService,
    private router: Router) { }

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

  loadWorkers() {
    this.loading = true;
    this.workersService.getWorkers()
      .subscribe(workers => {
        this.workers = workers;
        this.loading = false;
      },
        error => console.log(error));
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      this.router.navigate(["login"]);
      return false;
    }
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

  public logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["login"]);
  }
}
