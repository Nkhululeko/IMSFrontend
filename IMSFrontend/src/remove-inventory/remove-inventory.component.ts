import { Component } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-remove-inventory',
  templateUrl: './remove-inventory.component.html',
  styleUrls: ['./remove-inventory.component.scss']
})
export class RemoveInventoryComponent {
  partNumber: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private inventoryService: InventoryService) { }

  onDelete(): void {
    if (this.partNumber) {
      this.inventoryService['deleteInventoryByPartNumber'](this.partNumber).subscribe(
        (response: any) => {
          this.successMessage = 'Inventory item removed successfully.';
          this.errorMessage = null;
          this.partNumber = ''; // Clear input field
        },
        (error: any) => {
          this.errorMessage = 'Failed to remove inventory item.';
          this.successMessage = null;
        }
      );
    }
  }
}

