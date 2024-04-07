import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'bundesliga-players-content',
  templateUrl: './bundesliga-players-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, MatTableModule],
})
export class BundesligaPlayersContentComponent {
  @Input() bundesligaData: any;
}
