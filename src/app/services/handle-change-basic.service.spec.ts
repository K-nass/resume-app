import { TestBed } from '@angular/core/testing';

import { HandleChangeBasicService } from './handle-change-basic.service';

describe('HandleChangeBasicService', () => {
  let service: HandleChangeBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleChangeBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
