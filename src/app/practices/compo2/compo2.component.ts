import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { BrodCartService } from 'src/app/brod-cart.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {
  @Input() msg:any;
  @Output() brodsms= new EventEmitter<any>()

  brodMsg: string | undefined;

  constructor(private brod:BrodCartService) { }

  ngOnInit(): void {
    console.log(`com2 ${this.msg}`);

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.brodsms.emit(this.msg);
    this.brod.mymsg$.subscribe((res)=>{
      console.log(res);
      this.brodMsg=res;

    });
    console.log(this.brod.mymsg$);

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }



}
