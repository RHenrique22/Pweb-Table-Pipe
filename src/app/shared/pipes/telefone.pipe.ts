import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    let format: string;

    // Com IF e ELSE IF

    // if (value.length === 8) {
    //   format = `${value.substr(0, 4)}-${value.substr(4, 4)}`
    // }
    // else if (value.length === 10) {
    //   format = `(0${value.substr(0, 2)}) ${value.substr(2, 4)}-${value.substr(6, 4)}`;
    // }
    // else if (value.length === 11) {
    //   format = `(${value.substr(0, 3)}) ${value.substr(3, 4)}-${value.substr(7, 4)}`;
    // }
    // else {
    //   format = value;
    // }

    // Com Switch

    switch (value.length) {
      case 8:
        format = value.substr(0, 4) + "-" + value.substr(4, 4);
        break;
      case 10:
        format = "(0" + value.substr(0, 2) + ") " +
          value.substr(2, 4) + "-" + value.substr(6, 4);
        break;
      case 11:
        format = "(" + value.substr(0, 3) + ") " +
          value.substr(3, 4) + "-" + value.substr(7, 4);
        break;
      default:
        format = value;
        break;
    }
    return format;
  }

}
