import { Component, EventEmitter, Input, OnInit, Output, Signal, computed, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
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
      @for (firstName of firstNames() | autocomplete:userName ; track $index) {
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
  private userService = inject(UserService)

  @Input() userName = '';
  @Output() eventSearch: EventEmitter<string> = new EventEmitter();
  firstNames: Signal<string[]> = computed(() => {
    return this.userService.users().map(user => user.name)
  })
  propSearch: FormControl<string> = new FormControl()

  ngOnInit() {
     this.propSearch.valueChanges
     .pipe(
        debounceTime(300),
        distinctUntilChanged()
     )
     .subscribe((str) => {
       this.userName = str
     })
  }

  search() {
    this.eventSearch.emit(this.userName);
  }
}
