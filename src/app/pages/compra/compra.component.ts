import { FirestoreService } from './../../services/firestore.service';
import { Datos } from './../../models';
import { Component, OnInit } from '@angular/core';
declare var XLSX: any;

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss'],
})
export class CompraComponent implements OnInit {
  newData: Datos = {
    Tipo_de_negocio: '',
    NOMBRE: '',
    TELEFONO: '',
    MAIL: '',
    DIRECCION: '',
    CIUDAD: '',
    IMAGEN: '',
    PAIS: '',
    LATITUD: null,
    LONGITUD: null,
  };
  constructor(public database: FirestoreService) {}

  ngOnInit() {}
}
