import { TestBed } from '@angular/core/testing';

import { ListadoUsuarioClaseService } from './listado-usuario-clase.service';

describe('ListadoUsuarioClaseService', () => {
  let service: ListadoUsuarioClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoUsuarioClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
