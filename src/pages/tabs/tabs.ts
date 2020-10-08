import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CardsPage } from '../cards/card';
import { TshirtPage } from '../tshirt/tshirt';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardsPage;
  tab2Root = TshirtPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
