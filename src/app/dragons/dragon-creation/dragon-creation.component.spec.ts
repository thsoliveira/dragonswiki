import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCreationComponent } from './dragon-creation.component';

describe('DragonCreationComponent', () => {
  let component: DragonCreationComponent;
  let fixture: ComponentFixture<DragonCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
