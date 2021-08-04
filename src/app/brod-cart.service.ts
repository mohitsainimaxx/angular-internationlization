import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrodCartService {
  private mymsg=new Subject<string>();
  mymsg$=this.mymsg.asObservable();
  constructor() { }

  sendMsg(msg:any){
    return this.mymsg.next(msg);
  }

}
