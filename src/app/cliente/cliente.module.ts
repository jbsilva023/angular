import { ModalComponent } from './../modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { AppBootstrapModule } from '../app-bootstrap/app-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    AppBootstrapModule
  ],
  declarations: [
    ListaClienteComponent,
    ModalComponent
  ],
  exports: [
    ListaClienteComponent
  ]
})
export class ClienteModule { }
