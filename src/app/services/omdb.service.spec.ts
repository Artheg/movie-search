/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OmdbService } from './omdb.service';

describe('Service: Omdb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbService]
    });
  });

  it('should ...', inject([OmdbService], (service: OmdbService) => {
    expect(service).toBeTruthy();
  }));
});
