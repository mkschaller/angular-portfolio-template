import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const router: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(router);