import { Component } from '@angular/core';
import { NavbarComponent } from '../../features/navbar/navbar.component';
import { UsersComponent } from '../../features/users/users.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UsersComponent, NavbarComponent],
  template: `
    <app-navbar />
    <app-users />
  `
})
export class MainComponent { }
