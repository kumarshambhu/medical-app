import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbillComponent } from './showbill.component';

describe('ShowbillComponent', () => {
  let component: ShowbillComponent;
  let fixture: ComponentFixture<ShowbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
