import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appTruncate' })
export class TruncatePipe implements PipeTransform {
  transform(text: string, lengthLimit?:number):string {
    if (!lengthLimit || text.length <= lengthLimit) {
      return text;
    }

    return `<||${text}||>`;
  }
}
