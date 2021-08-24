import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDmydrict]'
})
export class DmydrictDirective {
//@ViewChild('p') ref:any;
@Input() backgroundColor:string = 'pink';
@Input() textInputColor:string='';
@HostBinding('style.backgroundColor') bgColor:string='green';
@HostBinding('style.color') color:string='black';
@HostBinding('style.height') height:string='100px';
  constructor(private rel:ElementRef,private renderer:Renderer2) {
  }
  ngOnInit() {
   // this.rel.nativeElement.style.color='red';
   // this.rel.nativeElement.style.backgroundColor = "green";
    //this.renderer.setStyle(this.rel.nativeElement, 'background-color', this.backgroundColor);
    //this.renderer.setStyle(this.rel.nativeElement, 'color', 'white');
    this.bgColor=this.backgroundColor;
    this.color=this.textInputColor;
    this.height='200px';
	//  	this.rel.n  ativeElement.style.color = "blue";
  }
  @HostListener('onDivClick') onMouseEnter(eventData: Event) {
    console.log(eventData);
		this.bgColor = this.backgroundColor;
		}
}
