import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DetailedTournament } from '../interfaces/detailed-tournament.interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  // Aqui iria a lógica para integrar con la API de torneos

  getDetailedTournament(tournamentId: string): Observable<DetailedTournament> {
    // Simulación de llamada a la API para obtener detalles del torneo
    return of({
      id: tournamentId,
      name: 'Torneo Aniversario',
      game: 'League of Legends',
      prizePool: 2000,
      date: new Date('2024-11-25'),
      bracketFormat: 'Single Elimination',
      minPlayers: 4,
      maxPlayers: 158,
      actualSignedUp: 22,
      imagesUrls: [
        'https://cdn.oneesports.gg/cdn-data/2024/05/LeagueofLegends_RisenLegendAhri_SplashArt.jpg',
        'https://cdn.oneesports.gg/cdn-data/2022/07/LeagueOfLegends_Vi_Senna_Yasuo_Volibear_Lulu_Splashart-1024x576.jpg',
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_9.jpg',
        'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9e51a5de262bc003427a13a859b2850ba3fc6969-7000x3939.jpg?auto=format&fit=fill&q=80&w=1255',
        'https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters/gangplank/skins/skin23/images/gangplank_splash_centered_23.jpg',
        'https://rpgifting.com/wp-content/uploads/2023/12/Dark-Cosmic-Jhin-382810.jpg'
      ],
      status: 'en directo',
      organizer: 'TheArmor12'
    }).pipe(
      delay(1000) // Simula un retraso de 1 segundo para la carga
    );
  }


}
