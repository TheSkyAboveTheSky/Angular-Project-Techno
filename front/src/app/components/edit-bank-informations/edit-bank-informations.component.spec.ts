import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankInformationsComponent } from './edit-bank-informations.component';

describe('EditBankInformationsComponent', () => {
  let component: EditBankInformationsComponent;
  let fixture: ComponentFixture<EditBankInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditBankInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
