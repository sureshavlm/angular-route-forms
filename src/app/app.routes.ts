import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
								{ path: '', redirectTo: '/login', pathMatch: 'full' },
								{ path: 'login', component: LoginComponent},
								{ path: 'dashboard/:username', component: DashboardComponent}
							  ];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);