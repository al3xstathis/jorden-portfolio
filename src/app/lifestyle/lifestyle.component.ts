import { Component, OnInit } from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {

  constructor(private analytics: AngularFireAnalytics) {
    analytics.setCurrentScreen('Lifestyle Screen');
    analytics.logEvent('Viewed Lifestyle Screen',{});
  }
  ngOnInit(): void {
  }

}
