
export interface DetailedTournament {
  id: string;
  name: string;
  game: string;
  prizePool: number;
  date: Date;
  bracketFormat: string;
  minPlayers: number;
  maxPlayers: number;
  actualSignedUp: number;
  imagesUrls?: string[];
  status: string;
  organizer: string
}
