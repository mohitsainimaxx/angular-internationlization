import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe'
})
export class MyCustomPipePipe extends DatePipe implements PipeTransform {

  transform(value: any,args:any): any {
    return value.find((res:any)=>res==args);
    //return Math.pyow(value,args);
    //return super.transform(value,'YYYY/mm/dd')
  }

}
