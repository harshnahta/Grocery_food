import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  summaryCart:any;
  topCategory: any;
  mainBody:any;
  constructor(public service:ApiService) { }

  ngOnInit(): void {
    localStorage.setItem("id","42")
    this.getOffer();
  }

  offerList:any=[{"OfferDesc":'',"OfferCode":''}];  
  getOffer(){
    this.service.GetOfferCode().subscribe((res:any)=>{
      console.log(res);
      this.offerList=res;
      this.StartTimer();
    },(err)=>{
      console.log(err);
    })
  }

  index=0;
  StartTimer(){   
    setTimeout((x:any) => 
      {        
          if(this.index+1<this.offerList.length){
            this.index=this.index+1;
          }else{
            this.index=0;
          }
          this.StartTimer();
    }, 2500);
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



 User_Role='';
 User_FirstName='';
 User_LastName='';
 User_Email='';
 User_Phone='';
 User_UserName='';
 User_Password='';
 User_Image ='';
 User_Address='';
 
 cpassword='';

 previewimg:any="../../../assets/pic.svg";  
 preview(event:any)
 {  
   let FileInput = event.target;
   let file = event.target.files[0];
   if(file.type=='image/png' ||file.type=='image/jpg' || file.type=='image/jpeg'){
     var reader = new FileReader();    
     reader.readAsDataURL(file); 
     reader.onload = (_event) => {       
         this.previewimg = reader.result;         
         this.User_Image=file;                        
     }          
   }else{
     alert("Only Images are allowed");
     this.User_Image='';
     this.previewimg="../../../assets/pic.svg";
   }
  
 }


 register(){
  //  let form=new FormData();
  //  form.append("User_FirstName",this.User_FirstName);
  //  form.append("User_LastName",this.User_LastName);
  //  form.append("User_Email",this.User_Email);
  //  form.append("User_Phone",this.User_Phone);
  //  form.append("User_UserName",this.User_UserName);
  //  form.append("User_Password",this.User_Password);
  //  form.append("User_Address",this.User_Address);
  //  form.append("User_Image",this.User_Image);
   this.service.registerUser({ 
    "User_Phone":this.User_Phone,
    "User_Password":this.User_Password}).subscribe((res:any)=>{
     console.log(res);
   },(err)=>{
     console.log(err);
   })
 }


 login_username='';
 login_password='';

 login(){
     this.service.loginUser({"MobileNo":this.login_username,"Password":this.login_password}).subscribe((res:any)=>{
       console.log(res);
       localStorage.setItem("data",JSON.stringify(res));
       
     },(err)=>{
       console.log(err);
     })
 }



}
