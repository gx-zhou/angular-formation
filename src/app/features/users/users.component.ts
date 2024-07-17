import { Component, ElementRef, OnDestroy, OnInit, QueryList, Signal, ViewChildren, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription, interval } from 'rxjs';
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
export class UsersComponent implements OnInit, OnDestroy {
  private userService = inject(UserService);

  @ViewChildren('refUser') divUsers!: QueryList<ElementRef<HTMLDivElement>>
  nbSelected = 0;
  extSelected = '';
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  users: Signal<User[]> = this.userService.usersFiltered;
  userIndex = 0
  errorMessage = ''
  loading = false
  subscription!: Subscription

  ngOnInit(): void {
    //this.userService.getAll().subscribe()
    this.subscription = interval(1000).subscribe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  createUser(form: NgForm) {
    if (form.invalid) return
    this.loading = true
    this.userService.create(form.value).subscribe(() => {
      this.loading = false
      form.resetForm()
    })
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
