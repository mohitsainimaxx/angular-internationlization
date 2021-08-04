import { TestBed } from '@angular/core/testing';

import { BrodCartService } from './brod-cart.service';

describe('BrodCartService', () => {
  let service: BrodCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrodCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
