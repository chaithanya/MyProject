import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveloginformComponent } from './reactiveloginform.component';

describe('ReactiveloginformComponent', () => {
  let component: ReactiveloginformComponent;
  let fixture: ComponentFixture<ReactiveloginformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveloginformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
