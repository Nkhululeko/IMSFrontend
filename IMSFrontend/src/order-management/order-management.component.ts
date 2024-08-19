import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {
  orders: any[] = []; // Replace with actual data
  displayedColumns: string[] = ['orderId', 'customerName', 'status', 'action'];

  constructor() { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    // Load orders from the service
    this.orders = [
      { orderId: 1234, customerName: 'John Doe', status: 'Pending' },
      { orderId: 5678, customerName: 'Jane Smith', status: 'Shipped' }
    ];
  }

  viewOrder(orderId: number): void {
    // Logic to view the order details
  }
}


