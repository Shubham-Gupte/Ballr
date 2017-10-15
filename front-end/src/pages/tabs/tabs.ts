import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { TodayPage } from '../today/today';
import { ProfilePage } from '../profile/profile';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodayPage;
  tab2Root = CalendarPage;
  tab3Root = AboutPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
