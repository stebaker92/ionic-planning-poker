import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CardsPage } from '../cards/card';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
