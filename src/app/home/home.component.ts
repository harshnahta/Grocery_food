import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  summaryCart:any;
  topCategory: any;
  mainBody:any;
  constructor(public service:ApiService) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplaySpeed: 500,
    autoplayTimeout: 3500,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      50: {
        items: 2
      },
      100: {
        items: 3
      },
      150: {
        items: 4
      },
      200: {
        items: 5
      },
      250: {
        items: 6
      },
      300: {
        items: 7
      },
      350: {
        items: 8
      }
    },
    nav: true
  }

 
  width=250;
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplaySpeed: 500,
    autoWidth:false,    
    autoplayTimeout: 3500,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      100: {
        items: 2
      },
      200: {
        items: 3
      },
      300: {
        items: 4
      },
      400: {
        items: 5
      }       
    },
    nav: true
  }

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplaySpeed: 500,
    autoplayTimeout: 2500,
    navSpeed: 700,
    navText: ["",""],
    responsive: {     
      1000: {
        items: 1
      }
    },
    nav: true
  }
  ngOnInit() {
    this.getHome();
    this.getBanner();
    this.getCategaory();
    // this.getNewProducts();
    // this.getFeatureProducts();
    // this.getTrendingProducts();
  }


  addCart(obj:any){
    console.log(obj);
    // let data={ "FK_User_ID": localStorage.getItem("id"), 
    // "FK_Product_ID": obj.,
    // "Order_Quentity":4,
    // "TotalAmount":"9999.00"}
  }

  featureProduct:any=[];
  newProducts:any=[];
  trendingProducts:any=[];
  ProductsListsOfall:any=[];
  
  getHome(){
    this.service.getHome().subscribe((res:any)=>{
      console.log(res);
      this.featureProduct=res.Featuredproduct;
      this.newProducts=res.NewProducts;
      this.trendingProducts=res.TrendingProducts;
      this.ProductsListsOfall=res.ProductDetails;
    },(err)=>{
      console.log(err);
    })
  }


  

  error(item:any){    
    item.Product_Image="../../assets/img/item/1.jpg";    
  }

  bannerList:any=[];
  showBanner=false;
  getBanner(){
    this.service.getMainBanner().subscribe((res:any)=>{
      console.log(res);
      this.bannerList=res;     
    },(err)=>{
      console.log(err);
    })
  }

  categoryList:any=[];
  getCategaory(){
    this.service.getCategory().subscribe((res:any)=>{
      console.log(res);
      this.categoryList=res;
    },(err)=>{
      console.log(err);
    })
  }


  getNewProducts(){
    this.service.Home_getNewProduct().subscribe((res:any)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

  getTrendingProducts(){
    this.service.Home_getTrendingProduct().subscribe((res:any)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

  getFeatureProducts(){
    this.service.Home_getFeaturedproducts().subscribe((res:any)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
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

 closeCart() {
  this.summaryCart.style.width = "0";
 this.mainBody.style.marginRight = "0";
  this.topCategory.style.width = "50%";
}

}
