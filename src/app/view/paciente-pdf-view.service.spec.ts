import { TestBed } from '@angular/core/testing';

import { PacientePdfViewService } from './paciente-pdf-view.service';

describe('PacientePdfViewService', () => {
  let service: PacientePdfViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientePdfViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
