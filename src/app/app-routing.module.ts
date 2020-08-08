import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {InfoComponent} from './info/info.component';
import {SportsComponent} from './sports/sports.component';
import {LifestyleComponent} from './lifestyle/lifestyle.component';
import {PortraitComponent} from './portrait/portrait.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'lifestyle',
    component: LifestyleComponent
  },
  {
    path: 'portrait',
    component: PortraitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
