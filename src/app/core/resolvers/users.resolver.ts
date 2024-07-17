import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user.interface";
import { UserService } from "../services/user.service";

export function usersResolver(): Observable<User[]> {
    const userService = inject(UserService)
    return userService.getAll()
}