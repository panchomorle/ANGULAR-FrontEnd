import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaproyectosComponent } from './filaproyectos.component';

describe('FilaproyectosComponent', () => {
  let component: FilaproyectosComponent;
  let fixture: ComponentFixture<FilaproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
