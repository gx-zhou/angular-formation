import { CurrencyPipe, UpperCasePipe } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AppService } from "../../core/services/app.service";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }} - {{ price | currency:'EUR':'code' }}</h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
        <button routerLink="/login">Connexion</button>
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, CurrencyPipe, RouterLink]
})
export class NavbarComponent implements OnInit {
    private appService = inject(AppService)

    title = ''
    name = 'ana'
    price = 15

    //constructor(private appService: AppService) { }

    ngOnInit() {
        this.title = this.appService.getTitle()
    }

    listenSearch(userName: string) {
        console.log(userName)
    }
}