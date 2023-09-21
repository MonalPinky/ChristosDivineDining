import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingclassComponent } from './cookingclass.component';

describe('CookingclassComponent', () => {
  let component: CookingclassComponent;
  let fixture: ComponentFixture<CookingclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookingclassComponent]
    });
    fixture = TestBed.createComponent(CookingclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
