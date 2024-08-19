import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.scss']
})
export class AddEditInventoryComponent implements OnInit {
  isEditMode = false;
  inventoryItem = { name: '', quantity: 0, price: 0 };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      // Load the item from the service
      this.loadItem(Number(id));
    }
  }

  loadItem(id: number): void {
    // Load item logic
    this.inventoryItem = { name: 'Brake Pads', quantity: 120, price: 150 };
  }

  onSubmit(): void {
    if (this.isEditMode) {
      // Update the item logic
    } else {
      // Add the item logic
    }
  }
}

