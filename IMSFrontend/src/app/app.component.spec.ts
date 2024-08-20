import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve inventory items from the server', () => {
    const mockInventory = [
      { id: 1, part_name: 'Brake Pad', part_number: 'BP1234', quantity: 50, price: 29.99 },
      { id: 2, part_name: 'Oil Filter', part_number: 'OF5678', quantity: 100, price: 9.99 }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('/api/inventory');
    expect(req.request.method).toEqual('GET');
    req.flush(mockInventory);

    expect(component.inventoryItems).toEqual(mockInventory);
  });
});
