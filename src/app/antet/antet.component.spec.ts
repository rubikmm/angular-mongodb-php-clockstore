import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntetComponent } from './antet.component';

describe('AntetComponent', () => {
  let component: AntetComponent;
  let fixture: ComponentFixture<AntetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
