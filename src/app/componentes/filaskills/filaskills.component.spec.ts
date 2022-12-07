import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaskillsComponent } from './filaskills.component';

describe('FilaskillsComponent', () => {
  let component: FilaskillsComponent;
  let fixture: ComponentFixture<FilaskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
