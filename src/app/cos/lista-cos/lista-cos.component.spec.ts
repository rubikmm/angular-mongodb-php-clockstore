import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCosComponent } from './lista-cos.component';

describe('ListaCosComponent', () => {
  let component: ListaCosComponent;
  let fixture: ComponentFixture<ListaCosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
