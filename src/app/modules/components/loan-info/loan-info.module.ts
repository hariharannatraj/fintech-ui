import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import { LoanInfoRoutingModule } from './loan-info-routing.module';
import { UserNeedsComponent } from './user-needs/user-needs.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { LoanApprovalComponent } from './loan-approval/loan-approval.component';
import { LoanInfoComponent } from '../loan-info/loan-info.component';
import { StepperComponent } from './stepper/stepper.component'


@NgModule({
  declarations: [
    UserNeedsComponent,
    UserAuthenticationComponent,
    LoanOffersComponent,
    LoanApprovalComponent,
    LoanInfoComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    LoanInfoRoutingModule,
    DialogModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    FormsModule
  ],
  entryComponents: [UserNeedsComponent]
})
export class LoanInfoModule { }
