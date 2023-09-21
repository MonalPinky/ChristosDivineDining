import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsairsChefhomeComponent } from './corsairs-chefhome.component';

describe('CorsairsChefhomeComponent', () => {
  let component: CorsairsChefhomeComponent;
  let fixture: ComponentFixture<CorsairsChefhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorsairsChefhomeComponent]
    });
    fixture = TestBed.createComponent(CorsairsChefhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
