import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWidgetComponent } from './services-widget.component';

describe('ServicesWidgetComponent', () => {
  let component: ServicesWidgetComponent;
  let fixture: ComponentFixture<ServicesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
