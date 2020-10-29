import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDemoMyAccountComponent } from './bank-demo-my-account.component';

describe('BankDemoMyAccountComponent', () => {
  let component: BankDemoMyAccountComponent;
  let fixture: ComponentFixture<BankDemoMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDemoMyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDemoMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
