import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchesComponent } from './witches.component';

describe('WitchesComponent', () => {
  let component: WitchesComponent;
  let fixture: ComponentFixture<WitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
