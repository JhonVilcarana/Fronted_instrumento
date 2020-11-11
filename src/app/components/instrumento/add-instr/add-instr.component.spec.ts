import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstrComponent } from './add-instr.component';

describe('AddInstrComponent', () => {
  let component: AddInstrComponent;
  let fixture: ComponentFixture<AddInstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
