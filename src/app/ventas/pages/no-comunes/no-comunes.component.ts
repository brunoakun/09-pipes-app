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
  clientes: string[] = ['Maria','Pedro','Luis'];
  clientesMap={
    '=0':'No tenemos ningún cliente',
    '=1':'Tenemos un cliente',
    'other':'Tenemos # clientes'
  }

  constructor() { }

  ngOnInit(): void {
  }



}
