import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './shared/layout/default/default.component';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NeutralComponent } from './shared/layouts/neutral/neutral.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: []
  },
  {
    path: 'imprint',
    component: NeutralComponent,
    children: [
      { path: '', component: ImprintComponent },
    ]
  },
  {
    path: '**',
    component: NeutralComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
