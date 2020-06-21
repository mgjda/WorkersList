import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { WorkerNewFormComponent } from './worker-new-form/worker-new-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';


const routes: Routes = [
  { 
    path:'', 
    component: MainViewComponent, 
    canActivate: [AuthGuardService]
  },
  { 
    path:'login',
    component: LoginComponent
  },
  { 
    path:'new-worker',
    component: WorkerNewFormComponent, 
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    } 
  },
  { 
    path:'worker/:id',
    component: WorkerDetailsComponent, 
    canActivate: [AuthGuardService]
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
