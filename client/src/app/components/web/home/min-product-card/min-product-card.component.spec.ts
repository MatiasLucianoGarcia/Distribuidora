import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinProductCardComponent } from './min-product-card.component';

describe('MinProductCardComponent', () => {
  let component: MinProductCardComponent;
  let fixture: ComponentFixture<MinProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
