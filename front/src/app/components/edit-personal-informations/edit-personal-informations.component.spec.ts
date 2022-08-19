import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonalInformationsComponent } from './edit-personal-informations.component';

describe('EditPersonalInformationsComponent', () => {
  let component: EditPersonalInformationsComponent;
  let fixture: ComponentFixture<EditPersonalInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditPersonalInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPersonalInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
