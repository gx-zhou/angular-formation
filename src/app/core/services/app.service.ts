import { Injectable, computed, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private _title = signal('Mon App')
    title = this._title.asReadonly()
    titleUppercase = computed(() => this._title().toUpperCase())

    setTitle(str: string) {
        this._title.set(str)
    }
}