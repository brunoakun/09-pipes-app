import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 2645875.2564;
  porcentaje: number = 0.547;
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
