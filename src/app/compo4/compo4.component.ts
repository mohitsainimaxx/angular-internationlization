import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-compo4',
  templateUrl: './compo4.component.html',
  styleUrls: ['./compo4.component.css']
})
export class Compo4Component implements OnInit ,OnChanges {
  arr:any=[];
  @ViewChild('myInput') myInput:ElementRef | undefined;
  respoData: any;
  constructor() { }

  ngOnInit(): void {
    const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//filter out non-even numbers
//const example = source.pipe(filter((num:any) => num % 2 === 0));
// const example1 = source.pipe(map((num:any) =>num));
// const example3 = source.pipe(switchMap((num:any) => num));
// example1.subscribe(val => console.log(`Even map number: ${val}`));
// example3.subscribe(val => console.log(`Even switch  number: ${val}`));
  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes);
    console.log('onchange');

  }
  ngAfterViewInit(): void {
   const evt=fromEvent<any>(this.myInput?.nativeElement,'keyup')
   .pipe(map((event)=>event.target.value),debounceTime(1000));
   evt.subscribe((item)=>{
     this.respoData=item;
      console.log(item);
   })
  }

}
