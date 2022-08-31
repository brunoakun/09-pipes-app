import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

// Módulo personalizado PrimeNgModule
import { PrimeNgModule } from '../prime-ng/prime-ng.module'

// Hay que exportar los componenetes, pues serán utilizados fuera de 'shared/'


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
