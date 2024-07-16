import { Routes } from "@angular/router";
import { MainComponent } from "./layouts/main/main.component";
import { LoginComponent } from "./pages/login/login.component";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]