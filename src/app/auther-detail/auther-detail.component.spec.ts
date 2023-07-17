import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherDetailComponent } from './auther-detail.component';

describe('AutherDetailComponent', () => {
  let component: AutherDetailComponent;
  let fixture: ComponentFixture<AutherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
