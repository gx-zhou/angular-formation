import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../core/services/app.service';
import { UserService } from '../../core/services/user.service';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-navbar',
  template: `
    <h1>{{ title() }} - {{ price | currency : 'EUR' : 'code' }}</h1>
    <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
    <button routerLink="/login">Connexion</button>
  `,
  standalone: true,
  imports: [SearchComponent, UpperCasePipe, CurrencyPipe, RouterLink],
})
export class NavbarComponent {
  private appService = inject(AppService);
  private userService = inject(UserService)

  title = this.appService.title;
  name = 'ana';
  price = 15;

  //constructor(private appService: AppService) { }

  constructor() {
    effect(() => {
        console.log(this.title())
    })
    this.appService.setTitle('nouvelle valeur')
  }

  listenSearch(userName: string) {
    this.userService.setSearch(userName)
  }
}
