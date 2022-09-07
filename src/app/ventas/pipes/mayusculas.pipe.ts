import { Pipe, PipeTransform } from "@angular/core";

// lo declararemos en el módulo ventas.module

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform(texto: string, aMayusculas: boolean = true): string {
        var salida: string = texto.toLowerCase();
        if (aMayusculas) salida = texto.toUpperCase();
        return (salida);
    }
}