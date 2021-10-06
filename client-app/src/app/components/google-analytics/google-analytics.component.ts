import { Component, OnInit } from '@angular/core';
import { FbConversionService } from '../../fb-conversion.service';
import { Guid } from "js-guid";

import UserData from '../../../../../src/types/UserData';
import GAIdentityData from '../../../../../src/types/GAIdentifyData';
import GAPageData from '../../../../../src/types/GAPageData';
import GATrackData from '../../../../../src/types/GATrackData';
import HistoryItem from '../../types/history-item.interface';

@Component({
  selector: 'app-google-analytics',
  templateUrl: './google-analytics.component.html',
  styleUrls: ['./google-analytics.component.css'],
  providers: [FbConversionService]
})
export class GoogleAnalyticsComponent implements OnInit {

  private userAgent = '';

  history: Array<HistoryItem> = [];
  resText = '';
  userForm = {
    em: '',
    ph: '',
    fn: '',
    ln: ''
  }

  constructor(private fbc: FbConversionService) { }

  ngOnInit() {
    this.userAgent = window.navigator.userAgent;
  }

  submitPageView() {
    const now = new Date();
    const currentTime = Math.floor(now.valueOf() / 1000);

    const historyItem: HistoryItem = {
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      event: 'PageView',
      status: null,
      fn: this.userForm.fn,
      ln: this.userForm.ln
    };

    const evt: GAPageData = {
      title: "Demo page",
      href: window.location.href,
      path: window.location.pathname
    };

    this.history.push(historyItem);

    this.fbc.postGAPageView(evt)
    .subscribe((data) => {
      historyItem.status = 200;
      this.resText = JSON.stringify(data)
    });
  }

  submitCustomEvent() {
    const now = new Date();
    const currentTime = Math.floor(now.valueOf() / 1000);

    const historyItem: HistoryItem = {
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      event: 'CustomEvent',
      status: null,
      fn: this.userForm.fn,
      ln: this.userForm.ln
    };

    const evt: GATrackData = {
      event: "AddToCart",
      category: "Product",
      quantity: 1,
      price: 200.00,
      name: "Sam0ple product",
      sku: "12345667789",
      orderId: "12345667789",
      currency: "USD"
    };

    this.history.push(historyItem);

    this.fbc.postGATrack(evt)
      .subscribe((data) => {
        historyItem.status = 200;
        this.resText = JSON.stringify(data)
      });
  }

  submitIdentity() {
    const now = new Date();
    const currentTime = Math.floor(now.valueOf() / 1000);

    const historyItem: HistoryItem = {
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      event: 'Identity',
      status: null,
      fn: this.userForm.fn,
      ln: this.userForm.ln
    };

    const user: UserData = {
      fn: this.userForm.fn,
      ln: this.userForm.ln,
      em: this.userForm.em,
      ph: this.userForm.ph,
      client_ip_address: '192.168.0.1',
      client_user_agent: this.userAgent
    }

    const evt: GAIdentityData = {
      userId: Guid.newGuid().toString(),
      traits: user
    };

    this.history.push(historyItem);

    this.fbc.postGAIdentify(evt)
      .subscribe((data) => {
        historyItem.status = 200;
        this.resText = JSON.stringify(data)
      });
  }
}
