import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrentGameState } from '../shared/models/current-game-state';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  @Input() currentGameState: CurrentGameState | undefined;
}
