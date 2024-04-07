import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BundesligaPlayersOverviewComponent } from './bundesliga-players-overview/bundesliga-players-overview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bundesliga-overview',
      },
      {
        path: 'bundesliga-overview',
        component: BundesligaPlayersOverviewComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const AppFmRoutingModule = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
});
