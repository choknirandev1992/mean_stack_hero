import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/member/login/login.component';
import { RegisterComponent } from './components/member/register/register.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JWTinterceptor } from './services/jwt.intercepptor';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ShopPaymentComponent } from './components/shop/shop-payment/shop-payment.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ChartComponent } from './components/chart/chart.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ReportComponent } from './components/report/report.component';
import { UserComponent } from './components/user/user.component';
import { ImageAssetPipe } from './pipes/image-asset.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    StockCreateComponent,
    StockEditComponent,
    StockHomeComponent,
    ShopHomeComponent,
    ShopPaymentComponent,
    CustomPipe,
    ChartComponent,
    TransactionComponent,
    ReportComponent,
    UserComponent,
    ImageAssetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JWTinterceptor, multi: true },
  ], // services
  bootstrap: [AppComponent] // index.html
})
export class AppModule { }
