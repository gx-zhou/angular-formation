import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../core/interfaces/user.interface';
import { UserService } from '../../core/services/user.service';
import { ExtensionPipe } from '../../shared/pipes/extension.pipe';
import { PluralPipe } from '../../shared/pipes/plural.pipe';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [UserCardComponent, PluralPipe, FormsModule, ExtensionPipe],
})
export class UsersComponent implements OnInit {
  private userService = inject(UserService)

  nbSelected = 0;
  extSelected = '';
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  users: User[] = [];

  ngOnInit(): void {
    this.users = this.userService.getAll()
  }
}
