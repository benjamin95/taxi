import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore/';

export const firebaseConfig = {
  apiKey: 'AIzaSyAA_zEhjHc-pG0OXjRmjc6Yh61GLpF2Rtw',
  authDomain: 'taxi-9b7a9.firebaseapp.com',
  databaseURL: 'https://taxi-9b7a9.firebaseio.com',
  projectId: 'taxi-9b7a9',
  storageBucket: 'taxi-9b7a9.appspot.com',
  messagingSenderId: '315861473203',
  appId: '1:315861473203:web:ccd7f34135974a54521dc6'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
