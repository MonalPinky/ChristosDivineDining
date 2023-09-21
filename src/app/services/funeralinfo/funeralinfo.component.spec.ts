import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralinfoComponent } from './funeralinfo.component';

describe('FuneralinfoComponent', () => {
  let component: FuneralinfoComponent;
  let fixture: ComponentFixture<FuneralinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuneralinfoComponent]
    });
    fixture = TestBed.createComponent(FuneralinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
