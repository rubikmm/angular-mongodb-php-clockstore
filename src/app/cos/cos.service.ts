import { Injectable } from '@angular/core';
import { Produs } from '../produse/produs.model';
import { Cos } from './cos.model';

@Injectable({providedIn: 'root'})
export class CosService {
  private cos: Cos[] = [];

  getListaCos() {
    return this.cos;
  }

  addProdusCos(elem: Cos){
    this.cos.push( elem );
  }

}
