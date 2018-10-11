import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer : Customer =  {
    id: 1001,
    firstName: 'OmPrakash',
    lastName: 'kuswaha',
    address1: '123 bagumpet',
    address2: '',
    city: 'hyderabad',
    state: 'AP',
    postalcode: 565656,
    phone: 7247247245,
    email: 'Email@gmail.com'
  };

  customers : Customer[] = [
    {
      id: 1001,
      firstName: 'Navin',
      lastName: 'Patnaik',
      address1: '123 bagumpet',
      address2: '',
      city: 'hyderabad',
      state: 'AP',
      postalcode: 565656,
      phone: 7247247245,
      email: 'Email@gmail.com'
    }, {
      id: 1002,
      firstName: 'Lohidas',
      lastName: 'Borupadra',
      address1: '123 bagumpet',
      address2: '',
      city: 'hyderabad',
      state: 'AP',
      postalcode: 565656,
      phone: 7247247245,
      email: 'Email@gmail.com'
    }, {
      id: 1003,
      firstName: 'Om Prakash',
      lastName: 'kuswaha',
      address1: '123 bagumpet',
      address2: '',
      city: 'hyderabad',
      state: 'AP',
      postalcode: 565656,
      phone: 7247247245,
      email: 'Email@gmail.com'
    }
  ];

  selectedCustomer: Customer;

  onSelect(customer :Customer) : void{
    this.selectedCustomer = customer;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
