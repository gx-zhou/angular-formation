import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompletePipe } from '../../../shared/pipes/autocomplete.pipe';

@Component({
  selector: 'app-search',
  template: `
    <input type="text" [(ngModel)]="userName" />
    @if (userName != '') {
    <button (click)="search()">Rechercher</button>
    }
    <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
    <ul>
      @for (firstName of firstNames | autocomplete:userName ; track $index) {
      <li>{{ firstName }}</li>
      } @empty {
      <p>Aucun nom</p>
      }
      <!-- <li *ngFor="let firstName of firstNames; let i = index ; let isFirst = first">
        {{ isFirst }} - {{ firstName }}
      </li> -->
    </ul>
  `,
  standalone: true,
  imports: [FormsModule, AutoCompletePipe /*, NgIf, NgFor*/],
})
export class SearchComponent implements OnInit {
  @Input() userName = '';
  @Output() eventSearch: EventEmitter<string> = new EventEmitter();
  firstNames: string[] = ['ana', 'ben', 'jim'];

  ngOnInit() {
    console.log(this.userName)
  }

  search() {
    this.eventSearch.emit(this.userName);
  }
}
