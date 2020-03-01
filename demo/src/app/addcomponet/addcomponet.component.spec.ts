import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomponetComponent } from './addcomponet.component';

describe('AddcomponetComponent', () => {
  let component: AddcomponetComponent;
  let fixture: ComponentFixture<AddcomponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcomponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
