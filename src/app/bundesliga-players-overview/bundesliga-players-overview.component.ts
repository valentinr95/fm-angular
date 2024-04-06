import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'bundesliga-players-overview',
  templateUrl: './bundesliga-players-overview.component.html',
  styleUrls: ['./bundesliga-players-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
})
export class BundesligaPlayersOverviewComponent {}
