import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceclientComponent } from './serviceclient.component';

describe('ServiceclientComponent', () => {
  let component: ServiceclientComponent;
  let fixture: ComponentFixture<ServiceclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceclientComponent]
    });
    fixture = TestBed.createComponent(ServiceclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
