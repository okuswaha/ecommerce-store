import {Component, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product = {
    id: 3001,
    sku: 'qwe-123',
    productName: 'The Fountain Head',
    productDesc: 'Amazing book by Ayn Rand',
    categoryId: 10,
    price: 15.00
  };

  constructor() {
  }

  ngOnInit() {
  }

}
