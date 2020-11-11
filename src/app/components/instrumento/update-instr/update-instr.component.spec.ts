import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstrComponent } from './update-instr.component';

describe('UpdateInstrComponent', () => {
  let component: UpdateInstrComponent;
  let fixture: ComponentFixture<UpdateInstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInstrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
