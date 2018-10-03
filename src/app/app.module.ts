import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ClienteModule } from './cliente/cliente.module';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
