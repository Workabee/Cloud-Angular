import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardControllerComponent } from './dashboard-controller.component';

describe('DashboardControllerComponent', () => {
  let component: DashboardControllerComponent;
  let fixture: ComponentFixture<DashboardControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
