import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocalStoresComponent} from "./local-stores.component";

const routes: Routes = [
  {
    path: '',
    component: LocalStoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalStoresRoutingModule { }
