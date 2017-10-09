import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './authentication/services/auth-guard.service';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';
import { AddressComponent }  from './address/address.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { VerticalComponent } from './vertical/vertical.component';
import { CostCenterComponent } from './cost-center/cost-center.component';

const routes: Routes = [
	{
	   path: '',
	   redirectTo: '/login',
	   pathMatch: 'full'
	},
	{
	   path: '',
	   component: DashboardLayoutComponent,
	   canActivate: [ AuthGuardService ],
	   children: [
		 {
		    path: 'article',
		    loadChildren: './article/article.module#ArticleModule'
		 },
		 {
		    path: 'address',
		    component: AddressComponent
		 }
	   ]		
	},
	{
	   path: 'login',
       loadChildren: './authentication/auth.module#AuthModule'
	},{
		path: 'admin',
		component: AdminComponent,
	},
	{
		path: 'employeeInfo',
		component : EmployeeInfoComponent ,
	},
	{
		path: 'vertical',
		component : VerticalComponent ,
	},
	{
		path: 'costCenter',
		component : CostCenterComponent ,
	}
];

@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 