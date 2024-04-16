import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'bundesliga-players-content',
  templateUrl: './bundesliga-players-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./bundesliga-players-content.component.scss'],
  imports: [CommonModule, FlexLayoutModule, MatTableModule],
})
export class BundesligaPlayersContentComponent {
  @Input() set bundesligaData(data: any) {
    this.dataSource = new MatTableDataSource(data);
  }

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'name',
    'verein',
    'position',
    'alter',
    'gehalt',
    'wert',
    'endet',
  ];
}
