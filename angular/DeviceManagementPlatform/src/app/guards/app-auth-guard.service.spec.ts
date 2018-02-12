import { TestBed, inject } from '@angular/core/testing';

import { AppAuthGuardService } from './app-auth-guard.service';

describe('AppAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppAuthGuardService]
    });
  });

  it('should be created', inject([AppAuthGuardService], (service: AppAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
