export interface DBLSeason {
  year: number;
  teams: [Team, Team, Team];
}

interface Team {
  name: 'SC Freiburg' | 'SV Werder' | 'FC Augsburg' | 'SV Darmstadt';
  position: number;
}
