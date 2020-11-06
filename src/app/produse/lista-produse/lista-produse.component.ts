import { Component, OnInit, OnDestroy} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProduseService } from '../produse.service';
import { CosService } from '../../cos/cos.service';
import { Produs } from '../produs.model';

@Component({
  selector: 'lista-produse',
  templateUrl: './lista-produse.component.html',
  styleUrls: ['./lista-produse.component.css']
})

export class ListaProduseComponent implements OnInit, OnDestroy {
  produse: Produs[] = [];

  ngOnInit(){
  }

  ngOnDestroy(){
  }

  constructor(private _snackBar: MatSnackBar, private produseServices: ProduseService, private cosServices: CosService) {
    this.produse = this.produseServices.getProduse();
  }

  adaugaCos( id:string, nume: string, pret: number, taxe: string, message: string, action: string) {
    this.cosServices.addProdusCos( {
      id,
      nume,
      pret,
      taxe,
    } );

    this._snackBar.open(
      message,
      action,
      {
        duration: 2000,
      }
    );
    console.log(this.cosServices.getListaCos());
  }

};

