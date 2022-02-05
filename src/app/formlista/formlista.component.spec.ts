import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlistaComponent } from './formlista.component';

describe('FormlistaComponent', () => {
  let component: FormlistaComponent;
  let fixture: ComponentFixture<FormlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
