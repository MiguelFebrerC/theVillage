import { Component } from '@angular/core';
import { Producto } from '../../Clases/Producto'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  producto: Producto = new Producto(1,'patatas',1,3,'patatas freir');
  title = 'The village';
}
