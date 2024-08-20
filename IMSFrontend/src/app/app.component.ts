import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface InventoryItem {
  part_name: string;
  part_number: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public inventoryItems: InventoryItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getInventory();
  }

  getInventory() {
    this.http.get<InventoryItem[]>('/api/inventory').subscribe(
      (result) => {
        this.inventoryItems = result;
      },
      (error) => {
        console.error('Error fetching inventory data:', error);
      }
    );
  }

  title = 'IMSFrontend';
}
