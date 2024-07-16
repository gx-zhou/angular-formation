import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    getTitle() {
        return 'Mon App'
    }
}