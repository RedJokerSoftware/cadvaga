import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatarComponent } from './candidatar.component';

describe('CandidatarComponent', () => {
  let component: CandidatarComponent;
  let fixture: ComponentFixture<CandidatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
