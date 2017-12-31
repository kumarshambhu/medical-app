import {Component, ViewChild} from '@angular/core';
import {routerTransition} from "./core/animations/router.transition";
import {MatMenuTrigger} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {

    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    someMethod() {
        this.trigger.openMenu();
    }

}
