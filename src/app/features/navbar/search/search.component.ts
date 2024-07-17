import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AutoCompletePipe } from '../../../shared/pipes/autocomplete.pipe';

@Component({
  selector: 'app-search',
  template: `
    <input type="text" [formControl]="propSearch" />
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
  imports: [FormsModule, ReactiveFormsModule, AutoCompletePipe /*, NgIf, NgFor*/],
})
export class SearchComponent implements OnInit {
  @Input() userName = '';
  @Output() eventSearch: EventEmitter<string> = new EventEmitter();
  firstNames: string[] = ['ana', 'ben', 'jim'];
  propSearch: FormControl<string> = new FormControl()

  ngOnInit() {
     this.propSearch.valueChanges
     .pipe(
        debounceTime(300),
        distinctUntilChanged()
     )
     .subscribe((str) => {
       console.log(str)
       this.userName = str
     })
  }

  search() {
    this.eventSearch.emit(this.userName);
  }
}
