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
    'name',
    'verein',
    'position',
    'alter',
    'gehalt',
    'wert',
    'endet',
    'toreGes',
    'gesEins',
    'lsp',
    'lsp_tore',
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
      this._sort = sort;
    }
  }

  @Input() set bundesligaData(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this._paginator;
    this.dataSource.sort = this._sort;
  }

  private _paginator: MatPaginator;
  private _sort: MatSort;
}
