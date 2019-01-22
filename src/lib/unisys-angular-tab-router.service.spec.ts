import { TestBed } from '@angular/core/testing';

import { UnisysAngularTabRouterService } from './unisys-angular-tab-router.service';

describe('UnisysAngularTabRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnisysAngularTabRouterService = TestBed.get(UnisysAngularTabRouterService);
    expect(service).toBeTruthy();
  });
});
