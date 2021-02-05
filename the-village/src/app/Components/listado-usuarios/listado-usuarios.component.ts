import { Component, OnInit, Input } from '@angular/core';
import {Usuario} from '../../Clases/Usuario';
import { ListadoUsuarioClaseService } from '../../Services/listado-usuario-clase.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {
  usuarios : Array<Usuario> = [];
  constructor(private servicio:ListadoUsuarioClaseService) { }

  displayUsuario(usuario: Usuario) {
    console.log(usuario);
  }
  ngOnInit(): void {
    this.servicio.getUsuarios().then(data => {
      this.usuarios = data;
    })
  }

}
