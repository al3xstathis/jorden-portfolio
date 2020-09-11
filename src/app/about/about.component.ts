import { Component, OnInit } from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private analytics: AngularFireAnalytics) {
    analytics.setCurrentScreen('About Screen');
    analytics.logEvent('Viewed About Screen',{});
  }

  ngOnInit(): void {
  }

}
