import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesHomeComponent } from './parties-home.component';

describe('PartiesHomeComponent', () => {
  let component: PartiesHomeComponent;
  let fixture: ComponentFixture<PartiesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartiesHomeComponent]
    });
    fixture = TestBed.createComponent(PartiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
