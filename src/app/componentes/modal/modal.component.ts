import { MarkerI } from './../../models';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() info:MarkerI

  constructor(private modalCtr:ModalController) { }

  ngOnInit() {
    console.log(this.info);

  }
  cerrarModal(){
    this.modalCtr.dismiss()
  }
}
