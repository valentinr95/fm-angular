import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BundesligaPlayersContentComponent } from './bundesliga-players-content/bundesliga-players-content.component';
import { bundesliga_data_2033 } from 'src/assets/testo-stats-bl-2033';

@Component({
  selector: 'bundesliga-players-overview',
  templateUrl: './bundesliga-players-overview.component.html',
  styleUrls: ['./bundesliga-players-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, BundesligaPlayersContentComponent],
})
export class BundesligaPlayersOverviewComponent {
  data: any;

  constructor() {
    this.data = bundesliga_data_2033;
  }
}
