import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaSeasonsOverviewComponent } from './bundesliga-seasons-overview.component';

describe('AppHeaderComponent', () => {
  let component: BundesligaSeasonsOverviewComponent;
  let fixture: ComponentFixture<BundesligaSeasonsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BundesligaSeasonsOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BundesligaSeasonsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
