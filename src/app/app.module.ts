import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Importar config de idioma español
import localEs from '@angular/common/locales/es-419';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-419' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
