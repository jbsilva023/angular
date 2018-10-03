import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() nameButton;
  @Input() descriptionTooltip;

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
