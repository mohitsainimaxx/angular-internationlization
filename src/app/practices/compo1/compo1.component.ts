import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BrodCartService } from 'src/app/brod-cart.service';
import { Compo2Component } from '../compo2/compo2.component';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {
  msg: any;
  brodMsg: any;
  mohit:any='hii mohit content';
  // @ViewChild(Compo2Component)
  // compo2!: Compo2Component;

  constructor(private brod:BrodCartService) { }

  ngOnInit(): void {

  }
  onClick(imsg:any){
    if(imsg!='')
    {
      this.msg=imsg;
    }else{


    this.msg='This is Share message';
    }
    this.brod.sendMsg(this.msg);


    console.log(`com1 ${this.msg}`);
  }

  ngAfterViewInit() {
    this.brod.mymsg$.subscribe((res)=>{
      console.log(res);
      this.brodMsg=res;

    })
  }

}
