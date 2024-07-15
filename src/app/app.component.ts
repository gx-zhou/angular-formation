import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar />
        <app-users />
    `,
    standalone: true,
    imports: [NavbarComponent, UsersComponent]
})
export class AppComponent {}