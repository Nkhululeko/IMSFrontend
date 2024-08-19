import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000/api/inventory';

  constructor(private http: HttpClient) { }

  getInventory(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addInventory(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateInventory(id: number, item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  deleteInventory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
