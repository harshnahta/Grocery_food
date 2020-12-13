import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }


  // url="http://13.232.95.136/api/";
  url="https://kitaabein.com/api/";
  Homeurl=this.url+'GetHomepage/';


  registerUser(obj:any){
    return this.http.post(this.url+'NewUserReg',obj);
  }

  loginUser(obj:any){
    return this.http.post(this.url+'UserLogin',obj);
  }


  getCart(){

  }

//   "FK_User_ID": "41", 
// "FK_Product_ID": 3,
// "Order_Quentity":4,
// "TotalAmount":"9999.00"
  addCart(obj:any){
    return this.http.post(this.url+'AddToCart',obj);    
  }

  updateCart(obj:any){
    return this.http.post(this.url+'UpdateCart',obj);    
  }
  removeCart(obj:any){
    return this.http.post(this.url+'RemoveFromCart',obj);    
  }

  uploadBanner(obj:any){
    return this.http.post(this.url+'UploadBanner',obj);
  }

  getMainBanner(){
    return this.http.get(this.url+'GetMainBanner');
  }

  GetOfferCode(){
    return this.http.get(this.url+'GetOfferCode');
  }

  getCategory(){
    return this.http.get(this.url+'getcategory');
  }


  getHome(){
    return this.http.get(this.url+'GetHomePage');
  }

  Home_getNewProduct(){
    return this.http.get(this.Homeurl+'NewProduct');
  }

  Home_getTrendingProduct(){
    return this.http.get(this.Homeurl+'TrendingProduct');
  }

  Home_getFeaturedproducts(){
    return this.http.get(this.Homeurl+'Featuredproducts');
  }

  Home_getproductdetail(){
    return this.http.get(this.Homeurl+'productdetail');
  }


}
