import { Routes } from "@angular/router";
import { TournamentsLayoutComponent } from "./layouts/tournaments-layout/tournaments-layout.component";
import { TournamentDetailPageComponent } from "./pages/tournament-detail-page/tournament-detail-page.component";


export const routes: Routes = [
  {
    path: '',
    component: TournamentsLayoutComponent,
    children: [
      {
        path: ':id',
        component: TournamentDetailPageComponent
      }
    ]
  }
]

export default routes;
