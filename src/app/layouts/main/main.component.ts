import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../features/navbar/navbar.component';
import { UsersComponent } from '../../features/users/users.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UsersComponent, NavbarComponent, RouterOutlet],
  template: `
    <app-navbar />
    <router-outlet />
  `
})
export class MainComponent { }
