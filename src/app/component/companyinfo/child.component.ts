import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <button (click)="clicked()" (mouseleave)="mouseleave()" class="btn pmd-ripple-effect btn-info"> Click Me</button>
    `,
    styles: [
        `
    `
    ]
})
export class ChildComponent implements OnInit {
    private message = "";
    @Output() myCustomEvent: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    clicked() {
        this.message = "You've made a custom event";
        this.myCustomEvent.emit(this.message);
    }

    mouseleave() {
        this.message = "Mouse leaved";
        this.myCustomEvent.emit(this.message);
    }
}
