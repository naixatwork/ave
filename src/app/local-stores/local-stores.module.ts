import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStoresRoutingModule } from './local-stores-routing.module';
import { LocalStoresComponent } from './local-stores.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LocalStoresComponent
  ],
    imports: [
        CommonModule,
        LocalStoresRoutingModule,
        GoogleMapsModule,
        MatIconModule
    ]
})
export class LocalStoresModule { }
