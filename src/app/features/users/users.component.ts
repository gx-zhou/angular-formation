import { Component, ElementRef, OnInit, QueryList, Signal, ViewChildren, inject } from '@angular/core';
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
  private userService = inject(UserService);

  @ViewChildren('refUser') divUsers!: QueryList<ElementRef<HTMLDivElement>>
  nbSelected = 0;
  extSelected = '';
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  users: Signal<User[]> = this.userService.usersFiltered;
  userIndex = 0
  errorMessage = ''

  ngOnInit(): void {
    this.userService.getAll().subscribe()
  }

  createUser() {
    this.userService.create({
      email: 'ana@gmail.tv',
      name: 'ana',
      username: 'test'
    }).subscribe()
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe()
  }

  scrollToIndex() {
    if (this.userIndex < 0 || this.userIndex >= this.users().length) {
      this.errorMessage = 'Invalid Index'
      return
    }
    const divUser = this.divUsers.toArray()[+this.userIndex]
    divUser.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}
