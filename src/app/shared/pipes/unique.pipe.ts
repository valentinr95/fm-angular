import { Pipe, PipeTransform } from '@angular/core';
/**
 * Returns the index of an element of an array
 */
@Pipe({
  name: 'uniquePipe',
})
export class UniquePipe implements PipeTransform {
  transform(array: Array<any>, attribute: string): Array<any> {
    if (array && array.length > 0) {
      return [
        ...new Set(
          array
            .map((x) => x[attribute])
            .sort()
            .filter((item) => item || item === 0)
        ),
      ];
    } else {
      return array;
    }
  }
}
