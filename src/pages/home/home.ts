import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string = 'https://www.google.co.in';

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser) {

  }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_self', options);

   // Inject scripts, css and more with browser.X
  }

}
