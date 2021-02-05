import {Component, Input} from '@angular/core';
import {Producto} from '../../Clases/Producto';

@Component({
    selector: 'listado-productos',
    templateUrl: 'listado-productos.component.html',
})

export class ListadoProductosComponent{
    // @Input() productos: Array<Producto>;
    displayProducto(producto : Producto){
        console.log(producto);
    }
}