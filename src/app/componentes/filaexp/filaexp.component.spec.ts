import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaexpComponent } from './filaexp.component';

describe('FilaexpComponent', () => {
  let component: FilaexpComponent;
  let fixture: ComponentFixture<FilaexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
