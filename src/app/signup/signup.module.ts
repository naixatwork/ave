import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SingupComponent } from './singup.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    SingupComponent
  ],
    imports: [
        CommonModule,
        SignupRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule
    ]
})
export class SignupModule { }
