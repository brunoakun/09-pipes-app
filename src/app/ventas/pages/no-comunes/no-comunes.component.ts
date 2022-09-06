import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Bruno';
  genero: string = 'masculino';

  generoMap = {
    'masculino': 'invitarle',
    'fenemino': 'invitarla'
  }

  //I18nPluralPipe
  clientes: string[] = ['Bruno', 'Maria', 'Pedro', 'Luis', 'Silvia'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  //KeyValuePipe
  persona: object|undefined = {
    nombre: 'Bruno',
    edad: 53,
    direccion: 'Port Masnou, Barcelona'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    if (this.nombre == 'Bruno') {
      this.nombre = 'Silvia';
      this.genero = 'fenemino';
    } else {
      this.nombre = 'Bruno';
      this.genero = 'masculino';
    }
  }

  borrar() {
    if (this.clientes.length) {
      console.log(this.clientes.length);
      this.clientes.splice(-1);
    }
  }

}
