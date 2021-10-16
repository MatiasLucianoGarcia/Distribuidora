import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCloseFormComponent } from './button-close-form.component';

describe('ButtonCloseFormComponent', () => {
  let component: ButtonCloseFormComponent;
  let fixture: ComponentFixture<ButtonCloseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCloseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCloseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
