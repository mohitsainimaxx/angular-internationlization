// @ts-ignore
import { Component, OnInit,ngModel, ViewChild, ContentChild, Renderer2, ElementRef } from '@angular/core';
import { Compo1Component } from '../compo1/compo1.component';
import { Compo2Component } from '../compo2/compo2.component';

@Component({
  selector: 'app-area',
  templateUrl:'./compo3.component.html',
  styles: []
})

export class Compo3Component implements OnInit {
  name:boolean=true;
  myTemplate:any;
  //@ContentChild('h1') h1;
  @ViewChild('name') el:ElementRef | undefined;
  ngTemplateOutlet: any;
  constructor(private renderer:Renderer2){
    console.log('constro');
  }
  ngOnInit(){
    console.log(this.renderer);
    //this.renderer.setStyle(
     // );
    console.log('hii');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  //  this.renderer.addClass(this.el,'colorss')

  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    if(this.myTemplate){

    }
  }
  getCompo(name:string):any{
    if(name=='com1'){
      this.ngTemplateOutlet=Compo1Component;
      return false;
    }else if(name=='com2'){
      this.ngTemplateOutlet=Compo2Component;
      return false;
    }
  }

  // code goes here
}
