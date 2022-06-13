import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LookBookComponent} from "./look-book.component";

const routes: Routes = [
  {
    path: '',
    component: LookBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookBookRoutingModule { }
