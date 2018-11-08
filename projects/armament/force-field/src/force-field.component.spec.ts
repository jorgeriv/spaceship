import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceFieldComponent } from './force-field.component';

describe('ForceFieldComponent', () => {
  let component: ForceFieldComponent;
  let fixture: ComponentFixture<ForceFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
