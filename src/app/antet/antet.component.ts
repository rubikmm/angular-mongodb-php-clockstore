import { Component, OnInit } from '@angular/core';
import { CosService } from '../cos/cos.service';

@Component({
  selector: 'app-antet',
  templateUrl: './antet.component.html',
  styleUrls: ['./antet.component.css']
})
export class AntetComponent implements OnInit {
  overlap = true;

  constructor(public cosS: CosService) { }

  ngOnInit(): void {
  }

}
