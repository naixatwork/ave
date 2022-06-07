import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookBookRoutingModule } from './look-book-routing.module';
import { LookBookComponent } from './look-book.component';
import {MatDividerModule} from "@angular/material/divider";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LookBookComponent
  ],
    imports: [
        CommonModule,
        LookBookRoutingModule,
        MatDividerModule,
        SharedModule
    ]
})
export class LookBookModule { }
