import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalInventory: number = 0;
  lowStockAlerts: number = 0;
  totalOrders: number = 0;
  pendingOrders: number = 0;
  recentActivities: any[] = [];
  alerts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Load stats, activities, and alerts here
    this.totalInventory = 100; // Example data
    this.lowStockAlerts = 5; // Example data
    this.totalOrders = 50; // Example data
    this.pendingOrders = 10; // Example data

    this.recentActivities = [
      { title: 'Order #1234 processed', date: new Date() },
      { title: 'Inventory updated for Tires', date: new Date() }
    ];

    this.alerts = [
      { message: 'Low stock on Brake Pads', date: new Date() }
    ];
  }
}
