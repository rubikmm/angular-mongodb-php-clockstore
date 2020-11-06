import { Injectable } from '@angular/core';
import { Produs } from '../produse/produs.model';

@Injectable({providedIn: 'root'})
export class ProduseService {
  private produse: Produs[] = [
    {
      id: '1',
      nume:'Ceas Tissot T-CLASSIC 1',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 1',
      pret:'1691',
      taxe:'201'
    },
    {
      id: '2',
      nume:'Ceas Tissot T-CLASSIC 2',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 2',
      pret:'1692',
      taxe:'202'
    },
    {
      id: '3',
      nume:'Ceas Tissot T-CLASSIC 3',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 3',
      pret:'1693',
      taxe:'203'
    },
    {
      id: '4',
      nume:'Ceas Tissot T-CLASSIC 4',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 4',
      pret:'1694',
      taxe:'204'
    },
    {
      id: '5',
      nume:'Ceas Tissot T-CLASSIC 5',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 5',
      pret:'1695',
      taxe:'205'
    },
    {
      id: '6',
      nume:'Ceas Tissot T-CLASSIC 6',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 6',
      pret:'1696',
      taxe:'206'
    },
    {
      id: '7',
      nume:'Ceas Tissot T-CLASSIC 7',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 7',
      pret:'1697',
      taxe:'207'
    },
    {
      id: '8',
      nume: 'Ceas Tissot T-CLASSIC 8',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 8',
      pret:'1698',
      taxe:'208'
    },
    {
      id: '9',
      nume: 'Ceas Tissot T-CLASSIC 9',
      categorie: 'clasic',
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar 9',
      pret:'1699',
      taxe:'209'
    },

  ];

  getProduse() {
    return this.produse;
  }

  addProdus(elem: Produs){
    this.produse.push(elem);
  }

  getProdusById(_id:string){
    return {
      nume: 'Ceas Tissot T-CLASSIC' + _id,
      categorie: 'clasic' + _id,
      imagine:'ceas-tissot-t-classic-t063.webp',
      descriere:'Tradition Perpetual Calendar' + _id,
      pret:'169' + _id,
      taxe:'20' + _id
    };
  }

}
