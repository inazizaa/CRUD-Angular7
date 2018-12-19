import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerformComponent } from './customer/form/customerform.component';
import { CustomerlistComponent } from './customer/list/customerlist.component';
import { AccountformComponent } from './account/form/accountform.component';
import { AccountlistComponent } from './account/list/accountlist.component';

const routes: Routes = [
  {
    path: 'customerform',
    component : CustomerformComponent
  },
  {
    path: 'customerlist',
    component : CustomerlistComponent
  },
  {
    path: 'accountform',
    component : AccountformComponent
  },
  {
    path: 'accountlist',
    component : AccountlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
