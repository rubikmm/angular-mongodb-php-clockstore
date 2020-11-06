import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { Cos } from '../cos.model';
import { CosService } from '../cos.service';

@Component({
  selector: 'app-lista-cos',
  templateUrl: './lista-cos.component.html',
  styleUrls: ['./lista-cos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListaCosComponent implements OnInit  {

  dataSource = this.CosService.getListaCos();
  columnsToDisplay = ['nume', 'pret', 'taxe'];
  expandedElement: Cos | null;


  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return 100;//this.dataSource.map(t => t.pret).reduce((acc, value) => acc + value, 0);
  }

  constructor(private CosService:CosService) { }

  ngOnInit(): void {
  }

}
