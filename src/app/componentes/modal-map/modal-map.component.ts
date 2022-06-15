import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/models';

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.component.html',
  styleUrls: ['./modal-map.component.scss'],
})
export class ModalMapComponent implements OnInit {
  constructor() {}
  data: Datos[];

  ngOnInit() {
    console.log(this.data);
  }
}
