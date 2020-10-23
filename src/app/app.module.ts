import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainmenuComponent } from "./header/mainmenu/mainmenu.component";
import { AuthmenuComponent } from "./header/authmenu/authmenu.component";
import { HomeComponent } from "./home/home.component";
import { SliderComponent } from "./slider/slider.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { PaypalworksComponent } from "./home/paypalworks/paypalworks.component";
import { LeftBlockComponent } from "./home/paypalworks/left-block/left-block.component";
import { RightBlockComponent } from "./home/paypalworks/right-block/right-block.component";
import { PanelsComponent } from "./home/panels/panels.component";
import { VideoComponent } from "./home/video/video.component";
import { PartnersComponent } from "./home/partners/partners.component";
import { SignupComponent } from "./home/signup/signup.component";
import { FooterComponent } from "./home/footer/footer.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { from } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    AuthmenuComponent,
    HomeComponent,
    SliderComponent,
    PagenotfoundComponent,
    PaypalworksComponent,
    LeftBlockComponent,
    RightBlockComponent,
    PanelsComponent,
    VideoComponent,
    PartnersComponent,
    SignupComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
