import { IProductos } from './../../interfaces/productos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent implements OnInit {
  mayus: boolean = false;
  orden: string = '';

  productos: IProductos[] = [
    {
      nombre: 'Patatas',
      precio: 14.1543,
      color: 'Amarillo',
      stock: true
    }, {
      nombre: 'Chocolate',
      precio: 24.7,
      color: 'Negro',
      stock: true
    }, {
      nombre: 'Berzas',
      precio: 7.245,
      color: 'verde',
      stock: false
    }, {
      nombre: 'Tomate',
      precio: 2.47,
      color: 'rojo',
      stock: false
    }
  ];

  constructor() { }

  ngOnInit(): void {    
  }

  togleMayusculas() {
    this.mayus = !this.mayus;
  }

  ordena(orden: string) {
    this.orden = orden;
  }

}
