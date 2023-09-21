import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsairchefComponent } from './corsairchef.component';

describe('CorsairchefComponent', () => {
  let component: CorsairchefComponent;
  let fixture: ComponentFixture<CorsairchefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorsairchefComponent]
    });
    fixture = TestBed.createComponent(CorsairchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
