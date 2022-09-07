import { IProductos } from './../interfaces/productos';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(productos: IProductos[], orden: string = ''): IProductos[] {
    if (!orden) return (productos);

    var salida: IProductos[];
    salida = productos.sort(function (a, b) {
      switch (orden) {
        case 'nombre':
          if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
          if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
          return 0; // a must be equal to b
          break;
        case 'precio':
          if (a.precio > b.precio) return 1;
          if (a.precio < b.precio) return -1;
          return 0; // a must be equal to b
          break;
        case 'color':
          if (a.color > b.color) return 1;
          if (a.color < b.color) return -1;
          return 0; // a must be equal to b
          break;
        case 'stock':
          if (a.stock > b.stock) return -1;
          if (a.stock < b.stock) return 1;
          return 0; // a must be equal to b
          break;
        default:
          return 0; // Sin ordenar
      }
    });

    return (salida);
  }

}
