import { Component, OnInit } from '@angular/core';
import { FbConversionService } from '../../fb-conversion.service';

import UserData from '../../../../../src/types/UserData';
import EventData from '../../../../../src/types/EventData';
import CustomData from '../../../../../src/types/CustomData';
import HistoryItem from '../../types/history-item.interface';

import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-fb-conversion',
  templateUrl: './fb-conversion.component.html',
  styleUrls: ['./fb-conversion.component.css'],
  providers: [FbConversionService]
})
export class FbConversionComponent implements OnInit {

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

    const user: UserData = {
      fn: this.hashString(this.userForm.fn),
      ln: this.hashString(this.userForm.ln),
      em: this.hashString(this.userForm.em),
      ph: this.hashString(this.userForm.ph),
      client_ip_address: '192.168.0.1',
      client_user_agent: this.userAgent
    }

    const event: EventData = {
      "event_name": "PageView",
      "event_time": currentTime,
      "user_data": user,
      "action_source": "website"
    };

    this.history.push(historyItem);

    this.fbc.postPageView(event)
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

    const user: UserData = {
      fn: this.hashString(this.userForm.fn),
      ln: this.hashString(this.userForm.ln),
      em: this.hashString(this.userForm.em),
      ph: this.hashString(this.userForm.ph),
      client_ip_address: '192.168.0.1',
      client_user_agent: this.userAgent
    }

    const customData: CustomData = {
      content_name: 'Sample',
      content_category: 'Demo',
      contents: [{ id: '123', quantity: 1, item_price: 123 }],
      value: 123,
      currency: 'USD'
    }

    const event: EventData = {
      "event_name": "CustomEventTest",
      "event_time": currentTime,
      "user_data": user,
      "custom_data": customData,
      "action_source": "website"
    };

    this.history.push(historyItem);

    this.fbc.postCustomEvent(event)
      .subscribe((data) => {
        historyItem.status = 200;
        this.resText = JSON.stringify(data)
      });
  }

  private hashString(str: string) {
    return SHA256(str).toString();
  }

}
