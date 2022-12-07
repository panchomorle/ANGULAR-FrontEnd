import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilabioComponent } from './filabio.component';

describe('FilabioComponent', () => {
  let component: FilabioComponent;
  let fixture: ComponentFixture<FilabioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilabioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilabioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
