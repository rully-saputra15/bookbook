import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListMessagePage } from './list-message.page';

describe('ListMessagePage', () => {
  let component: ListMessagePage;
  let fixture: ComponentFixture<ListMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
