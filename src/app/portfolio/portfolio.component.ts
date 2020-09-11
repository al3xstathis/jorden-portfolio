import { Component, OnInit } from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private analytics: AngularFireAnalytics) {
    analytics.setCurrentScreen('Portfolio Screen');
    analytics.logEvent('Viewed Portfolio Screen',{});
  }

  ngOnInit() {
  }

}
