import { Directive, EventEmitter, HostListener, Input, Output, effect, input } from "@angular/core";

@Directive({
    selector: '[confirm]',
    standalone: true
})
export class ConfirmDirective {
    @Input('confirm') message = ''
    confirmUsername = input('')
    @Output() eventConfirm: EventEmitter<void> = new EventEmitter()

    constructor() {
        effect(() => {
            console.log(this.confirmUsername())
        })
    }

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message + ' ' + this.confirmUsername())
        if (bool) this.eventConfirm.emit()
    }
}