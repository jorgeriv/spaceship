import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmamentComponent } from './armament.component';

describe('ArmamentComponent', () => {
  let component: ArmamentComponent;
  let fixture: ComponentFixture<ArmamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
