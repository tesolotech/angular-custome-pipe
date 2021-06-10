import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uper'
})
export class UperPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const uper = value.toUpperCase();
    return uper;
  }

}
