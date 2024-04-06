import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaPlayersOverviewComponent } from './bundesliga-players-overview.component';

describe('AppHeaderComponent', () => {
  let component: BundesligaPlayersOverviewComponent;
  let fixture: ComponentFixture<BundesligaPlayersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BundesligaPlayersOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BundesligaPlayersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
