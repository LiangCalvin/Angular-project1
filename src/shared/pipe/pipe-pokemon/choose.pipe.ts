import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'choose'
})
export class ChoosePipe implements PipeTransform {

  transform(value: 'Y' | 'N' ): unknown {
    switch (value) {
      case 'Y':
        return 'ถูกต้อง'
      case 'N':
        return 'ผิดแล้ว'
      default:
        return '-'
    }
  }

}
