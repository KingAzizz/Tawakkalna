import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalPage } from './digital.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalPageRoutingModule {}
