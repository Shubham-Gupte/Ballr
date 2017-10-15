import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutBallrPage } from '../about/about-pages/about-ballr/about-ballr';
import { TesticularCancerPage} from '../about/about-pages/testicular-cancer/testicular-cancer';
import { LymphomaPage} from '../about/about-pages/lymphoma/lymphoma';
import { TemperaturePage } from '../about/about-pages/temperature/temperature';
import { FertilityPage } from '../about/about-pages/fertility/fertility';
import { SelfSexPage } from '../about/about-pages/self-sex/self-sex';
import { SelfCheckPage } from '../about/about-pages/self-check/self-check';
import { ContactPage } from '../about/about-pages/contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  firstPage = AboutBallrPage;
  secondPage = TesticularCancerPage;
  thirdPage = LymphomaPage;
  fourthPage = TemperaturePage;
  fifthPage = FertilityPage;
  sixthPage = SelfSexPage;
  seventhPage = SelfCheckPage;
  eighthPage = ContactPage;

  constructor(public navCtrl: NavController) {

  }


  public goToOtherPage(page: any) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(page);
  }
}
