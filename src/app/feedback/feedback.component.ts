import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
customerFeedback:Feedback=<Feedback>{};
myForm=new FormGroup({
  name: new FormControl(''),
  rating: new FormControl(''),
  gender: new FormControl(''),
  comment: new FormControl('')
});
  constructor() { }
  ngModel:any;
  ngOnInit(): void {
    
      
  }
  saveFeedback() {
    console.log(this.myForm.controls);
    alert('Thanks for your valuable feedback!!!\nThe feedback has been submitted succesfully.');
    //console.table(this.customerFeedback);
  }

}
