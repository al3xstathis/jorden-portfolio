import { Component, OnInit } from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {

  constructor(private analytics: AngularFireAnalytics) {
    analytics.setCurrentScreen('Portait Screen');
    analytics.logEvent('Viewed Portfolio Screen',{});
  }
  ngOnInit(): void {
  }

}
