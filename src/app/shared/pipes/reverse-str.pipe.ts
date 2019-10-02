import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: string): string {
    let newStr: string = "";
    //console.log(value.length);
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
      //console.log(value.charAt(i));
    }
    return newStr;
  }

}
