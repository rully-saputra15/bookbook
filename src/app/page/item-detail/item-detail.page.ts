import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  rating;
  constructor() { 
  }

  ngOnInit() {
    this.rating = Array(3).fill(0).map((x,i) => i);
  }

}
