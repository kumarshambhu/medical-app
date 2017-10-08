import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-subtype',
    templateUrl: './subtype.component.html',
    styleUrls: ['./subtype.component.css']
})
export class SubtypeComponent {
    speed = 'Slow';
    vehicle = 'Train';
    newSpeed = 'Hypersonic';
    newVehicle = 'Plane';
    today = Date.now();
       jsonObject = [{title: "mytitle"}, {title: "Programmer"}];
       days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday'];
    constructor() {
    }

    upper (str: any) {
        str = str.toUpperCase();
        return str;
    }
    lower (str: any) {
        return str.toLowerCase();
    }
    setValues (speed: any, vehicle: any) {
        this.speed = speed;
        this.vehicle = vehicle;
    }
}
