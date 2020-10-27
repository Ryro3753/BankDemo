import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDemoHomeComponent } from './bank-demo-home.component';

describe('BankDemoHomeComponent', () => {
  let component: BankDemoHomeComponent;
  let fixture: ComponentFixture<BankDemoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDemoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDemoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
