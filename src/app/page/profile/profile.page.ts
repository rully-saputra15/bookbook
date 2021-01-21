import { Component, OnInit,ViewChild } from '@angular/core';

import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild('slide1',{static:false}) slide1: IonSlides;

  constructor() { }

  ngOnInit() {
  }

}
