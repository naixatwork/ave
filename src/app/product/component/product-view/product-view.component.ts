import {Component, OnInit} from '@angular/core';
import {Product} from "../product.types";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {flatMap, forkJoin, switchAll, switchMapTo, tap} from "rxjs";

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
    public product!: Product

    constructor(private readonly productService: ProductService, private readonly activatedRoute: ActivatedRoute) {
        this.getProductIdFromRouteAndGetProduct();
    }

    ngOnInit(): void {
    }

    private getProductIdFromRouteAndGetProduct(): void {
        this.activatedRoute.params
            .pipe(
                flatMap((params) => this.productService.getProductById(params['product-id']))
            ).subscribe((product) => {
            if (product) {
                this.setProduct(product)
            }
        })

    }

    private setProduct(product: Product): void {
        this.product = {...product};
    }
}
