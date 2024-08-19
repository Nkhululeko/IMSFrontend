import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventoryItems: any[] = [];
  displayedColumns: string[] = ['partNumber', 'partName', 'quantity', 'price'];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.inventoryService['getInventory']().subscribe(
        (      data: any[]) => {
        this.inventoryItems = data;
      },
        (      error: any) => {
        console.error('Error fetching inventory data', error);
      }
    );
  }
}
