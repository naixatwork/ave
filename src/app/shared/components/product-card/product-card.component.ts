import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() price: string = 'ITEM_PRICE';
  @Input() oldPrice: string = '';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = 'ITEM_IMAGE_ALTERNATIVE';
  @Input() name: string = 'ITEM_NAME';
  @Input() description: string = 'ITEM_DESCRIPTION';

  public shouldDescriptionShow = false;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public toggleDescriptionShow(): void {
    this.shouldDescriptionShow = !this.shouldDescriptionShow;
  }

  public goToProductPage(): void {
    this.router.navigate(['/product/', '1']);
  }

}
