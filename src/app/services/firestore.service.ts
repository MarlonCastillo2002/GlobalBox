import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private angularFirestore: AngularFirestore) {}

  createDocument<tipo>(data: tipo, enlace: string) {
    const ref = this.angularFirestore.collection<tipo>(enlace);
    return ref.add(data);
  }

  getCollectionChanges<tipo>(path: string): Observable<tipo[]> {
    const ref = this.angularFirestore.collection<tipo>(path);
    return ref.valueChanges();
  }
}
