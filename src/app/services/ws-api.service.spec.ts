import { TestBed } from '@angular/core/testing';

import { WsApiService } from './ws-api.service';

describe('WsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsApiService = TestBed.get(WsApiService);
    expect(service).toBeTruthy();
  });
});
