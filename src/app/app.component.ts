import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawComponent } from './features/draw/draw.component';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet />
         <!-- <app-draw /> -->
    `,
    standalone: true,
    imports: [RouterOutlet, DrawComponent]
})
export class AppComponent {}