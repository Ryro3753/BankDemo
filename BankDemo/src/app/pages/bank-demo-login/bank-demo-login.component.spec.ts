import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDemoLoginComponent } from './bank-demo-login.component';

describe('BankDemoLoginComponent', () => {
  let component: BankDemoLoginComponent;
  let fixture: ComponentFixture<BankDemoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDemoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDemoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
