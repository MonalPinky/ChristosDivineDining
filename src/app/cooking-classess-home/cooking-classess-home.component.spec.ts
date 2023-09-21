import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingClassessHomeComponent } from './cooking-classess-home.component';

describe('CookingClassessHomeComponent', () => {
  let component: CookingClassessHomeComponent;
  let fixture: ComponentFixture<CookingClassessHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookingClassessHomeComponent]
    });
    fixture = TestBed.createComponent(CookingClassessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
