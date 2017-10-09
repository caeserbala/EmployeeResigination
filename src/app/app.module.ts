import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';
import { AddressComponent }  from './address/address.component';
import { LogoutComponent } from './authentication/logout.component';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AuthService } from './authentication/services/auth.service';
import { AdminComponent } from './admin/admin.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BodyDisplayComponent } from './body-display/body-display.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { VerticalComponent } from './vertical/vertical.component';
import { CostCenterComponent } from './cost-center/cost-center.component';

@NgModule({
  imports: [     
        BrowserModule,
		AppRoutingModule,
  ],
  declarations: [
        DashboardLayoutComponent,
		AddressComponent,
		LogoutComponent,
        AppComponent,
        AdminComponent,
        LeftNavComponent,
        BodyDisplayComponent,
        EmployeeInfoComponent,
        VerticalComponent,
        CostCenterComponent
  ],
  providers: [ 
        AuthService,
        AuthGuardService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
