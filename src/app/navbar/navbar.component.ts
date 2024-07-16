import { CurrencyPipe, UpperCasePipe } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { AppService } from "../core/services/app.service";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }} - {{ price | currency:'EUR':'code' }}</h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, CurrencyPipe]
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