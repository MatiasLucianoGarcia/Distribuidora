import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonConfirmFormComponent } from './button-confirm-form.component';

describe('ButtonConfirmFormComponent', () => {
  let component: ButtonConfirmFormComponent;
  let fixture: ComponentFixture<ButtonConfirmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonConfirmFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonConfirmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
