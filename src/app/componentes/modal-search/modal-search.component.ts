import { Datos } from './../../models';
import { FirestoreService } from './../../services/firestore.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss'],
})
export class ModalSearchComponent implements OnInit {
  searchBar: string;
  constructor(
    public modalController: ModalController,
    public firestoreService: FirestoreService
  ) {
    this.getItems();
  }
  searchTerm: string;
  usuarios: Datos[] = [];

  ngOnInit() {
    /* const searchTerm$ = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );
    const usuarios$ = collectionData(
      query(collection(this.firestoreService, 'Usuarios'))
    ) as Observable<Datos[]>;
    this.usuarios$ = combineLatest([usuarios$, searchTerm$]).pipe(
      map(([UsuariosList, searchTerm]) =>
        UsuariosList.filter(
          (usuariosItem) =>
            searchTerm === '' ||
            usuariosItem.NOMBRE.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    ); */
  }
  dismissModal() {
    this.modalController.dismiss();
  }

  getItems() {
    const enlace = 'Usuarios';
    this.firestoreService
      .getCollectionChanges<Datos>(enlace)
      .subscribe((res) => {
        this.usuarios = res;
        console.log(this.usuarios);
      });
  }
}
