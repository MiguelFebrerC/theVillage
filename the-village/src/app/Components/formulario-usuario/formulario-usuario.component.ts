import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario} from '../../Clases/Usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {
  model : Usuario = new Usuario(1,'miquel','febrer',987654321, 'obs');
  @Output() onsubmit = new EventEmitter<any>();
  public submit() {
    this.onsubmit.emit(this.model);
    console.log(this.model);
    this.model = new Usuario(0,'','',0,'');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
