import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  summaryCart:any;
  topCategory: any;
  mainBody:any;
  constructor() { }

  ngOnInit(): void {
  }

  closeCart() {
    this.summaryCart= document.getElementById("summaryCart");
    this.summaryCart.style.width = "0px";
    this.mainBody=document.getElementById("mainBody")
   this.mainBody.style.marginRight = "0px";
   this.topCategory=document.getElementById("topCategory")
    this.topCategory.style.width = "50%";
  }

  openCart() {
    this.summaryCart= document.getElementById("summaryCart");
    this.summaryCart.style.width = "400px";
    this.summaryCart.style.position = "fixed";
    this.summaryCart.style.right = "0px";
    this.topCategory=document.getElementById("topCategory")
    this.topCategory.style.width = "40%";
    this.mainBody=document.getElementById("mainBody")
    this.mainBody.style.marginRight = "400px";
 }

}
