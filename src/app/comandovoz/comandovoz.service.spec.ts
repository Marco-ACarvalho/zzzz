import { TestBed, inject } from '@angular/core/testing';

import { ComandovozService } from './comandovoz.service';

describe('ComandovozService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComandovozService]
    });
  });

  it('should be created', inject([ComandovozService], (service: ComandovozService) => {
    expect(service).toBeTruthy();
  }));
});
