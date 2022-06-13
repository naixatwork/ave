import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {ProductViewComponent} from './component/product-view/product-view.component';
import {ProductService} from "./component/product.service";
import {SharedModule} from "../shared/shared.module";
import {StarRatingModule} from "angular-star-rating";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        ProductComponent,
        ProductViewComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        StarRatingModule.forChild(),
        MatDividerModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {
}
