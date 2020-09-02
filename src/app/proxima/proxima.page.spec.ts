import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProximaPage } from './proxima.page';

describe('ProximaPage', () => {
  let component: ProximaPage;
  let fixture: ComponentFixture<ProximaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProximaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
