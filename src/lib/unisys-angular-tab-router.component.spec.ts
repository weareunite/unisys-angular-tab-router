import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnisysAngularTabRouterComponent } from './unisys-angular-tab-router.component';

describe('UnisysAngularTabRouterComponent', () => {
  let component: UnisysAngularTabRouterComponent;
  let fixture: ComponentFixture<UnisysAngularTabRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnisysAngularTabRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnisysAngularTabRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
