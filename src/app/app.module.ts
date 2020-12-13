import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule} from '@angular/forms';
import { HashLocationStrategy ,LocationStrategy } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductDetailComponent,
    ShopComponent,
    CategoryDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [CarouselModule,
    BrowserModule,BrowserAnimationsModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ provide : LocationStrategy, useClass : HashLocationStrategy,},],
  bootstrap: [AppComponent]
})
export class AppModule { }
