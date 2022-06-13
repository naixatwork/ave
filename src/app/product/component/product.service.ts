import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "./product.types";

@Injectable()
export class ProductService {
    constructor(private readonly httpClient: HttpClient) {
    }

    public getAllProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>("assets/products.json");
    }

    public getProductById(productId: string): Observable<Product | undefined> {
        return this.httpClient.get<Product[]>("assets/products.json")
            .pipe(
                map((products) => {
                    return products.find(product => product.id === productId);
                })
            )
    }
}
