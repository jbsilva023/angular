import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  create() {

  }

  show() {
    return [
      {'id': '001', 'nome': 'Jonas', 'email': 'jbsilva023@gmail.com'},
      {'id': '002', 'nome': 'Saulo', 'email': 'saulo@gmail.com'},
      {'id': '003', 'nome': 'João', 'email': 'joao@gmail.com'},
      {'id': '004', 'nome': 'Thiago', 'email': 'thiago@gmail.com'},
      {'id': '005', 'nome': 'Marcelo', 'email': 'marcelo@gmail.com'},
      {'id': '006', 'nome': 'Maurício', 'email': 'mauricio@gmail.com'}
    ];
  }

  edit() {

  }

  delete() {

  }
}
