import { TestBed } from '@angular/core/testing';

import { ReportesServiceService } from './reportes-service.service';

describe('ReportesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportesServiceService = TestBed.get(ReportesServiceService);
    expect(service).toBeTruthy();
  });
});
