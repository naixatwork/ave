import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
    declarations: [
        ProductCardComponent,
        FooterComponent
    ],
    exports: [
        ProductCardComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ]
})
export class SharedModule { }
