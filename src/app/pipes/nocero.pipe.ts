import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nocero'
})
export class NoceroPipe implements PipeTransform {

  transform( numero: any): string {
    // console.log(numero);
    // console.log(typeof numero);
    if ( numero === 0 ) {
      return '';
    } else {
      return numero;
    }

  }
}
