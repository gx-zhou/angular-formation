import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';

type UserPayload = Omit<User, 'id'>

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly url = 'https://jsonplaceholder.typicode.com/users'
  private http = inject(HttpClient)
  private _users = signal<User[]>([]);
  private _searchValue = signal(''); // BehaviorSubject
  users = this._users.asReadonly();
  usersFiltered = computed(() => {
    return this.users().filter((user) =>
      user.name.includes(this._searchValue())
    );
  });

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users) => {
        this._users.set(users)
      })
    )
  }

  create(payload: UserPayload): Observable<User> {
    return this.http.post<User>(this.url, payload).pipe(
      tap((user) => {
        const users = this.users()
        this._users.set([ ...users, user ])
      })
    )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      tap(() => {
        const usersFiltered = this.users().filter(user => user.id != id)
        this._users.set(usersFiltered)
      })
    )
  }

  setSearch(str: string) {
    this._searchValue.set(str);
  }
}
