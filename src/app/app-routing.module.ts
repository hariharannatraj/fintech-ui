import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./modules/components/loan-info/loan-info.module').then(m => m.LoanInfoModule)
  },
  { path: 'loan-info', 
    loadChildren: () => import('./modules/components/loan-info/loan-info.module').then(m => m.LoanInfoModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
