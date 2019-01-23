import { Injectable } from '@angular/core';

// Angular Firestore
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private firestore: AngularFirestore) {}

  getSites() {
    return this.firestore.collection('sites').snapshotChanges();
  }
}
