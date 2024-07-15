import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  template: `
    <input type="text" [(ngModel)]="userName" />
    @if (userName != '') {
    <button (click)="search()">Rechercher</button>
    }
    <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
    <ul>
      @for (firstName of firstNames ; track $index) {
      <li>{{ $first }} - {{ firstName }}</li>
      } @empty {
      <p>Aucun nom</p>
      }
      <!-- <li *ngFor="let firstName of firstNames; let i = index ; let isFirst = first">
        {{ isFirst }} - {{ firstName }}
      </li> -->
    </ul>
  `,
  standalone: true,
  imports: [FormsModule /*, NgIf, NgFor*/],
})
export class SearchComponent {
  @Input() userName = '';
  @Output() eventSearch: EventEmitter<string> = new EventEmitter();
  firstNames: string[] = ['ana', 'ben', 'jim'];

  search() {
    this.eventSearch.emit(this.userName);
  }
}
