import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '09-pipes-app';
  nombre: string = 'manolo';
  precio: number = 1000;

  mostrarNombre() {
    console.log(this.nombre);
  }
}
