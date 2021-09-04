import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanInfoRoutingModule } from './loan-info-routing.module';
import { LoanInfoComponent } from './loan-info.component';
import { UserNeedsComponent } from './user-needs/user-needs.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { LoanApprovalComponent } from './loan-approval/loan-approval.component';


@NgModule({
  declarations: [
    LoanInfoComponent,
    UserNeedsComponent,
    UserAuthenticationComponent,
    LoanOffersComponent,
    LoanApprovalComponent
  ],
  imports: [
    CommonModule,
    LoanInfoRoutingModule
  ]
})
export class LoanInfoModule { }
