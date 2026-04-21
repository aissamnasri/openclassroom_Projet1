export interface Participation {
  year: number;
  medalsCount: number;
}

export interface Olympic {
  id: number;
  country: string;
  participations: Participation[];
}