import { CommonModule } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import { TournamentDetailBracketComponent } from '../tournament-detail-bracket/tournament-detail-bracket.component';
import { TabItem } from '../../interfaces/tab-item.interface';

@Component({
  selector: 'tou-tournament-detail-tableview',
  imports: [
    CommonModule,
    TournamentDetailBracketComponent
  ],
  templateUrl: './tournament-tableview.component.html',
  styles: [`
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class TournamentDetailTableviewComponent {
  selectedTab = signal<string>('reglas');
  sidebarExpanded = signal<boolean>(true);

  tabs = signal<TabItem[]>([
    { id: 'reglas', label: 'Reglas', svgUrl: '/assets/svgs/rules.svg' }, // Ejemplo de URL
    { id: 'llave', label: 'Llave', svgUrl: '/assets/svgs/brackets.svg' }, // Ejemplo de URL
    { id: 'posiciones', label: 'Posiciones', svgUrl: '/assets/svgs/leaderboard.svg' }, // Ejemplo de URL
    { id: 'anuncios', label: 'Anuncios', svgUrl: '/assets/svgs/announcement.svg', count: 0 }, // Ejemplo de URL
    { id: 'actividad', label: 'Actividad', svgUrl: '/assets/svgs/activity.svg', count: 8 } // Ejemplo de URL
  ]);

  selectTab(tabId: string) {
    this.selectedTab.set(tabId);
  }

  toggleSidebar() {
    this.sidebarExpanded.set(!this.sidebarExpanded());
  }

  getTabClasses(tabId: string): string {
    const isActive = this.selectedTab() === tabId;
    return isActive
      ? 'bg-bg-dark text-white border-l-2 border-green'
      : 'text-white/70 hover:bg-white/5 hover:text-white';
  }

  getMobileTabClasses(tabId: string): string {
    const isActive = this.selectedTab() === tabId;
    return isActive
      ? 'text-white border-green'
      : 'text-white/70 border-transparent';
  }
}
