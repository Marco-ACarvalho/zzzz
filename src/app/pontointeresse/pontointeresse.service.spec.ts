import { TestBed, inject } from '@angular/core/testing';

import { PontointeresseService } from './pontointeresse.service';

describe('PontointeresseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PontointeresseService]
    });
  });

  it('should be created', inject([PontointeresseService], (service: PontointeresseService) => {
    expect(service).toBeTruthy();
  }));
});
