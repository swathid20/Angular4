import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products= ["shoe", "snacks", "mobile"];
  constructor() { }

  ngOnInit() {
  }
giftme = function(counter)
{
  alert("But me this!!!" + this.products[counter]);
}
}
