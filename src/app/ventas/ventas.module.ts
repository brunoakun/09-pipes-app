
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { SiNoPipe } from './pipes/siNo.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    
    // Componentes
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    // Pipes
    MayusculasPipe,
    SiNoPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
})
export class VentasModule { }
