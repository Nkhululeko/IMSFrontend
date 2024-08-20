import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from './models'; // Assuming InventoryItem is defined in models.ts

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:40080/api/inventory';

  constructor(private http: HttpClient) { }

  // Fetch all inventory items
  getInventory(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.apiUrl);
  }

  // Fetch a single inventory item by ID
  getInventoryById(id: number): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.apiUrl}/${id}`);
  }

  // Add a new inventory item
  addInventory(item: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.apiUrl, item);
  }

  // Update an existing inventory item by ID
  updateInventory(id: number, item: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.apiUrl}/${id}`, item);
  }

  // Delete an inventory item by ID
  deleteInventory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Delete an inventory item by Part Number (assuming the backend supports this)
  deleteInventoryByPartNumber(partNumber: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/part-number/${partNumber}`);
  }
}


