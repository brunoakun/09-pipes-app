import { Pipe, PipeTransform } from "@angular/core";

// lo declararemos en el módulo ventas.module

@Pipe({
    name: 'SiNo'
})
export class SiNoPipe implements PipeTransform {
    transform(valor: boolean): string {
        var salida: string = 'no';
        if (valor) salida = 'si';
        return (salida);
    }
}