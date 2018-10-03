import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ClienteService } from './../cliente.service';
import { ModalComponent } from './../../modal/modal.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  title = 'Lista de clientes';
  clientes: object;
  nameButton = 'Adicionar cliente';
  descriptionTooltip = 'Adicionar novo cliente';
  @ViewChild('modal') modalComponent: ModalComponent;
  @ViewChild('template') template;

  constructor(private clienteService: ClienteService) {
    this.clientes = this.clienteService.show();
  }

  public openModal(template: TemplateRef<any>) {
    console.log(this.template);
    this.modalComponent.openModal(template);
  }

  ngOnInit() {
  }

}
