import { _isNumberValue } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DBLSeason } from 'src/assets/interfaces/dbl-season';

@Component({
  selector: 'bundesliga-players-content',
  templateUrl: './bundesliga-players-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./bundesliga-players-content.component.scss'],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class BundesligaPlayersContentComponent {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'Name',
    'Nationalitaet',
    'Verein',
    'Position',
    'Alter',
    'Gehalt',
    'Endet',
    'Wert',
    'GesEins',
    'ToreGes',
    'Lsp',
    'Tore',
    'Transfereinkommen',
  ];

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    if (paginator && this.dataSource) {
      this.dataSource.paginator = paginator;
      this._paginator = paginator;
    }
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (sort) {
      this.dataSource.sort = sort;
      this.dataSource.sortingDataAccessor = (
        element: any,
        sortHeaderId: string
      ) => this.initSortingDataAccessor(element, sortHeaderId);
      this._sort = sort;
    }
  }

  @Input() set bundesligaData(data: DBLSeason[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this._paginator;
    this.dataSource.sort = this._sort;
  }

  private _paginator: MatPaginator;
  private _sort: MatSort;

  initSortingDataAccessor(element: any, sortHeaderId: string): string | number {
    let value: any = element[sortHeaderId];
    switch (sortHeaderId) {
      case 'Gehalt':
        value = this._returnWeeklyWage(element.Gehalt);
        break;
      case 'Endet':
        value = this._parseDate(element.Endet);
        break;
      case 'Wert':
        value = this._parseMarketValue(element.Wert);
        break;
      case 'Transfereinkommen':
        value = this._parseMarketValue(element.Transfereinkommen);
        break;
    }

    return _isNumberValue(value) ? Number(value) : value;
  }

  private _returnWeeklyWage(wageString: string) {
    const wage = wageString.match(/€(\d{1,3}(?:,\d{3})*)\s?\/W/);
    return wage ? Number(wage[1].replace(',', '')) : 0;
  }
  private _parseDate(dateString: string) {
    const date = dateString.match(/(\d{2})\.(\d{2})\.(\d{4})/);
    return date ? new Date(`${date[3]}-${date[2]}-${date[1]}`) : new Date();
  }
  private _parseMarketValue(valueString: string) {
    const regex = /€([\d.]+)([KkMm]?)(io)?/;
    const matches = valueString.match(regex);
    if (!matches) {
      throw new Error('Invalid input format');
    }

    const numericPart = parseFloat(matches[1]);
    const multiplier = matches[2]?.toLowerCase();
    const multiplierValue =
      multiplier === 'k' ? 1000 : multiplier === 'm' ? 1000000 : 1;

    return numericPart * multiplierValue;
  }
}
