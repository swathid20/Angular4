import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Introduction';
  name= 'swathi';
  num1=2;
  num2=3;

  displayDate= function(){
  
return new Date();
  }
}
