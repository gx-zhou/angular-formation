import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../../../core/interfaces/user.interface";
import { LangPipe } from "../../../shared/pipes/lang.pipe";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select="h1" />
            <header>{{ user.name }}</header>
            {{ user.email }}
            <footer>
                <button (click)="removeUser()">{{ 'REMOVE' | lang:'fr' }}</button>
            </footer>
            <ng-content select="h2" />
        </article>
    `,
    standalone: true,
    imports: [LangPipe]
})
export class UserCardComponent implements AfterContentInit {
    @Input() user: User = {} as User
    @Output() eventDelete: EventEmitter<number> = new EventEmitter()
    @ContentChild('title') title!: ElementRef<HTMLHeadingElement>

    removeUser() {
        this.eventDelete.emit(this.user.id)
    }

    ngAfterContentInit(): void {
        console.log(this.title)
    }
}