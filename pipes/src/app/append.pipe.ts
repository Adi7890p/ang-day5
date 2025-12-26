import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  standalone: true
})
export class AppendPipe implements PipeTransform {

  transform(value: string, arg1: string): string {
    return value + " " + arg1;
  }

}
