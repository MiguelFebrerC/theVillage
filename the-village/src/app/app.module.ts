import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/main/app.component';
import { FormularioProductoComponent } from './Components/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from './Components/listado-productos/listado-productos.component';
import { ListadoUsuariosComponent } from './Components/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { FormularioUsuarioComponent } from './Components/formulario-usuario/formulario-usuario.component';
import { ListadoUsuarioClaseService } from './Services/listado-usuario-clase.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioProductoComponent,
    ListadoProductosComponent,
    ListadoUsuariosComponent,
    UsuarioComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListadoUsuarioClaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
