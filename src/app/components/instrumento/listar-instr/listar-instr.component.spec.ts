import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInstrComponent } from './listar-instr.component';

describe('ListarInstrComponent', () => {
  let component: ListarInstrComponent;
  let fixture: ComponentFixture<ListarInstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInstrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
