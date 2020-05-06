import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { WorkerNewFormComponent } from './worker-new-form/worker-new-form.component';
import { WorkerEditFormComponent } from './worker-edit-form/worker-edit-form.component';


const routes: Routes = [
  { 
    path:'', 
    component: MainViewComponent 
  },
  { 
    path:'new-worker',
    component: WorkerNewFormComponent
  },
  { 
    path:'worker/edit/:id',
    component: WorkerEditFormComponent
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
