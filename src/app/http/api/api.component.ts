import { Component, OnInit } from '@angular/core';
import { RemotecallService } from "../../remotecall.service"
@Component({
  selector: 'cts-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private res:RemotecallService) { 
    res.callremote();
  }

  ngOnInit() {
  }

}
