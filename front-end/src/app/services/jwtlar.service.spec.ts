import { TestBed } from '@angular/core/testing';

import { JwtlarService } from './jwtlar.service';

describe('JwtlarService', () => {
  let service: JwtlarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtlarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
