import { Routes } from "@angular/router";
import { usersResolver } from "./core/resolvers/users.resolver";
import { UsersComponent } from "./features/users/users.component";
import { MainComponent } from "./layouts/main/main.component";
import { LoginComponent } from "./pages/login/login.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        resolve: {
            usersList: usersResolver
        },
        children: [
            {
                path: '',
                component: UsersComponent
            },
            {
                path: 'user/:id',
                component: UserEditComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
]