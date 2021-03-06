import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})

export class SizesService {

  sizesList:AngularFireList<any>;
  array=[];

  constructor(private firebase :AngularFireDatabase) {
    this.sizesList = this.firebase.list('sizes');
    this.sizesList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
   }
}
