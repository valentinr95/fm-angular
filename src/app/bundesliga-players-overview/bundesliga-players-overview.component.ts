import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BundesligaPlayersContentComponent } from './bundesliga-players-content/bundesliga-players-content.component';
import { bundesliga_data_2033 } from 'src/assets/data/testo-stats-bl-2033';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { DBLSeason } from 'src/assets/interfaces/dbl-season';

@Component({
  selector: 'bundesliga-players-overview',
  templateUrl: './bundesliga-players-overview.component.html',
  styleUrls: ['./bundesliga-players-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    BundesligaPlayersContentComponent,
    HttpClientModule,
  ],
})
export class BundesligaPlayersOverviewComponent {
  data: DBLSeason[];

  constructor(private _http: HttpClient) {
    this.data = bundesliga_data_2033;
    /*     this._getJsonFromDrive()
      .pipe(
        map((data) => console.log(data)),
        catchError((error) => [console.log('error', error)])
      )
      .subscribe((data) => console.log(data)); */
  }

  private _getJsonFromDrive() {
    return this._http.get(
      'https://drive.google.com/uc?export=download&id=1msBCPp82N2WySB2jQPJ6FiKu5rrJEQEV',
      {
        responseType: 'json',
      }
    );
  }
}
