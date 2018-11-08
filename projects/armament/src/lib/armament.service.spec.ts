import { TestBed, inject } from '@angular/core/testing';

import { ArmamentService } from './armament.service';

describe('ArmamentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmamentService]
    });
  });

  it('should be created', inject([ArmamentService], (service: ArmamentService) => {
    expect(service).toBeTruthy();
  }));
});
