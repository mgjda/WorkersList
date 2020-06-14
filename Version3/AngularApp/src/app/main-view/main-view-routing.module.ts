import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view.component';
import { WorkerComponent } from '../worker/worker.component';

const mainRoutes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainViewRoutingModule { }
