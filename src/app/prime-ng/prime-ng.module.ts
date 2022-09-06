import { NgModule } from '@angular/core';


//Prime-Ng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    BrowserAnimationsModule
  ]
})
export class PrimeNgModule { }
