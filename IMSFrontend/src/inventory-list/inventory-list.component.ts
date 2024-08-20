import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Inventory } from '../models';


@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  dataSource = new MatTableDataSource<Inventory>(); // Use MatTableDataSource
  displayedColumns: string[] = ['part_number', 'part_name', 'quantity', 'price'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.http.get<Inventory[]>('http://localhost:40080/api/inventory').subscribe(
      data => {
        this.dataSource.data = data; // Set the data to dataSource
      },
      error => {
        console.error('Error loading inventory data', error);
      }
    );
  }
}
