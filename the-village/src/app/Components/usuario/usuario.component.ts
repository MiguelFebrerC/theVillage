import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Clases/Usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  user : Usuario = new Usuario(1,'miquel','febrer', 987654321,'obs');
  constructor() { }

  ngOnInit(): void {
  }

}
