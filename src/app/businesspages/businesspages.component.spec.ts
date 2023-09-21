import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesspagesComponent } from './businesspages.component';

describe('BusinesspagesComponent', () => {
  let component: BusinesspagesComponent;
  let fixture: ComponentFixture<BusinesspagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinesspagesComponent]
    });
    fixture = TestBed.createComponent(BusinesspagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
