import { Component } from '@angular/core';
import { CurrentGameState } from './shared/models/current-game-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentGameState: CurrentGameState = {
    season: '2033/34',
  };
}
