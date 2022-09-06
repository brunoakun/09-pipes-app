import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {
  holaMundo: string = 'hola mundo';
  fecha: Date = new Date();           // Hoy

  constructor() { }

  ngOnInit(): void {
  }

}
