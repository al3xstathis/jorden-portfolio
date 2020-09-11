import {Component, OnInit} from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private analytics: AngularFireAnalytics) {
    analytics.setCurrentScreen('Contact Screen');
    analytics.logEvent('Viewed Contact Screen',{});
  }

  sendAnalytics() {
    this.analytics.logEvent('Sent Email', {})
  }

  ngOnInit(): void {
  }

}
