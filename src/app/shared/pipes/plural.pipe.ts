import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
  standalone: true,
})
export class PluralPipe implements PipeTransform {
  transform(word: string, nb: number): string {
    return word + (nb > 1 ? 's' : '')
  }
}
