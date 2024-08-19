import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.scss']
})
export class AddEditInventoryComponent implements OnInit {
  inventoryForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inventoryForm = this.fb.group({
      name: ['', Validators.required],
      part_number: ['', Validators.required],
      quantity: [0, Validators.required],
      price: [0, Validators.required],
      supplier: ['', Validators.required],
      supplier_id: [null, Validators.required],
      category_id: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    const inventoryId = this.route.snapshot.paramMap.get('id');
    if (inventoryId) {
      this.isEditMode = true; // Set edit mode
      // Load existing inventory item for editing
      this.inventoryService.getInventoryById(Number(inventoryId)).subscribe((data: any) => {
        this.inventoryForm.patchValue(data);
      });
    } else {
      this.isEditMode = false; // Set add mode
    }
  }

  onSubmit(): void {
    if (this.inventoryForm.valid) {
      if (this.isEditMode) {
        // Update existing inventory item
        this.inventoryService.updateInventory(this.inventoryForm.value.id, this.inventoryForm.value).subscribe(() => {
          this.router.navigate(['/inventory-list']);
        });
      } else {
        // Add new inventory item
        this.inventoryService.addInventory(this.inventoryForm.value).subscribe(() => {
          this.router.navigate(['/inventory-list']);
        });
      }
    }
  }
}




