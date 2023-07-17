import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherListComponent } from './auther-list.component';

describe('AutherListComponent', () => {
  let component: AutherListComponent;
  let fixture: ComponentFixture<AutherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
