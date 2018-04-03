import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tasklist=["got to market","travel to  bangalore"];
sometask="add your text here";
  constructor() { }

  ngOnInit() {
  }
  addtask=function(st)
  {
    console.log("Adding task"+this.sometask);
    this.tasklist.push(this.sometask);
    console.log(this.tasklist);

  }
  deletetask=function(ct)
  {
    this.tasklist.splice(ct,1);
  }
}
