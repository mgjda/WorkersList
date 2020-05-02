import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';


const routes: Routes = [
  { 
    path:'', 
    component: MainViewComponent 
  },
  { 
    path:'worker/:id',
    component: WorkerDetailsComponent
  },
  { 
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
