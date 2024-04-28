import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Spieler } from 'src/assets/interfaces/dbl-spieler';

@Component({
  selector: 'bundesliga-seasons-overview',
  templateUrl: './bundesliga-seasons-overview.component.html',
  styleUrls: ['./bundesliga-seasons-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
})
export class BundesligaSeasonsOverviewComponent {
  data: Spieler[];

  constructor() {}
}
