import {Component, Output, EventEmitter}  from '@angular/core';
import {Producto} from '../../Clases/Producto';

@Component({
    selector: 'formulario-producto',
    templateUrl: 'formulario-producto.component.html',
})

export class FormularioProductoComponent{
    model : Producto = new Producto(0,'',0,0,'');
    @Output() onSubmit = new EventEmitter<any>();

    public submit() {
        this.onSubmit.emit(this.model);
        console.log(this.model);
        this.model = new Producto(0,'',0,0,'');
    }

}