import { Injectable } from '@angular/core';
import {Usuario} from '../Clases/Usuario';

const USUARIOS: Array<Usuario> = [
  new Usuario(1,'Miquel', 'Febrer', 987654321, 'obs1'),
  new Usuario(2,'Mabel', 'Febrer', 987654321, 'obs1'),
  new Usuario(3,'Alex', 'Febrer', 987654321, 'obs1'),
  new Usuario(4,'Joel', 'Febrer', 987654321, 'obs1')
]

const RETRASO = 500;

@Injectable({
  providedIn: 'root'
})
export class ListadoUsuarioClaseService {

  constructor() { }

  getUsuarios() {
    return new Promise<Usuario[]>(data => {
      setTimeout(() => {
        data(USUARIOS);
      }, RETRASO);
    });
  }
}