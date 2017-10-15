import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutBallrPage } from '../pages/about/about-pages/about-ballr/about-ballr';
import { TesticularCancerPage } from '../pages/about/about-pages/testicular-cancer/testicular-cancer';
import { LymphomaPage } from '../pages/about/about-pages/lymphoma/lymphoma';
import { TemperaturePage } from '../pages/about/about-pages/temperature/temperature';
import { FertilityPage } from '../pages/about/about-pages/fertility/fertility';
import { SelfSexPage } from '../pages/about/about-pages/self-sex/self-sex';
import { SelfCheckPage } from '../pages/about/about-pages/self-check/self-check';
import { ContactPage } from '../pages/about/about-pages/contact/contact';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ProfilePage,
    AboutBallrPage,
    TesticularCancerPage,
    LymphomaPage,
    TemperaturePage,
    FertilityPage,
    SelfSexPage,
    SelfCheckPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ProfilePage,
    AboutBallrPage,
    TesticularCancerPage,
    LymphomaPage,
    TemperaturePage,
    FertilityPage,
    SelfSexPage,
    SelfCheckPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
