import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ConditionComponentComponent } from '../../component/condition-component/condition-component.component';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage implements OnInit {

  constructor(private popOverCtrl: PopoverController) { }

  ngOnInit() {
  }
  async popOverCondition(ev: any){
    const popover = await this.popOverCtrl.create({
      component: ConditionComponentComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
