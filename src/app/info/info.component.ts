import { Component, OnInit } from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private analytics: AngularFireAnalytics) {
    analytics.setCurrentScreen('Info Screen');
    analytics.logEvent('Viewed Info Screen',{});
  }
  ngOnInit(): void {
  }

}
