import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer = {
    id: 1001,
    firstName: 'Om Prakash',
    lastName: 'kuswaha',
    address1: '123 bagumpet',
    address2: '',
    city: 'hyderabad',
    state: 'AP',
    postalcode: 565656,
    phone: 7247247245,
    email: 'Email@gmail.com'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
