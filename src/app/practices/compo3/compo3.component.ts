import { EventEmitter, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { BrodCartService } from 'src/app/brod-cart.service';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component implements OnInit {
  @Input() msg:any;
  @Output() brodsms= new EventEmitter<any>();
  brodMsg:any;

  constructor(private brod:BrodCartService) { }

  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.brodsms.emit(this.msg);
    this.brod.mymsg$.subscribe((res)=>{
      console.log(res);
      this.brodMsg=res;

    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.


  }
}
