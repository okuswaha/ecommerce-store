import {Component, OnInit} from '@angular/core';
import {Order} from "../order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order : Order = {
    id: 20012,
    customerId: 1001,
    orderDate: '10/2/2018',
    paid: false,
    paidDate: '10/2/2018'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
