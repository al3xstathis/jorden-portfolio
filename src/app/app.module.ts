import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularSvgIconModule} from "angular-svg-icon";
import { InfoComponent } from './info/info.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { SportsComponent } from './sports/sports.component';
import { PortraitComponent } from './portrait/portrait.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from './footer/footer.component';
import {AngularFireAnalyticsModule, ScreenTrackingService} from '@angular/fire/analytics';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    InfoComponent,
    LifestyleComponent,
    SportsComponent,
    PortraitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularSvgIconModule.forRoot(),
    NgxScrollTopModule
  ],
  providers: [
    ScreenTrackingService,
    {provide: BUCKET, useValue: 'gs://jorden-portfolio.appspot.com'
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
