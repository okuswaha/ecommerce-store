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

  products : Product [] = [
    {
      id: 3001,
      sku: 'qwe-123',
      productName: 'The Fountain Head',
      productDesc: 'Amazing book by Ayn Rand',
      categoryId: 10,
      price: 15.00
    },
    {
      id: 3002,
      sku: 'qwe-456',
      productName: 'The Effective Java',
      productDesc: 'Gives some important best practices in java',
      categoryId: 10,
      price: 15.00
    },
    {
      id: 3003,
      sku: 'qwe-789',
      productName: 'Atlas Shrugged',
      productDesc: 'Another master piece by Ayn Rand',
      categoryId: 10,
      price: 15.00
    }
  ];

  selectedProduct : Product;

  onSelect(product : Product ) : void {
    this.selectedProduct = product;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
