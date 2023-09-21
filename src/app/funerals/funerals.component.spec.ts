import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralsComponent } from './funerals.component';

describe('FuneralsComponent', () => {
  let component: FuneralsComponent;
  let fixture: ComponentFixture<FuneralsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuneralsComponent]
    });
    fixture = TestBed.createComponent(FuneralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
