import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-userinfo',
    templateUrl: './userinfo.component.html',
    styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
    images: any = [
        {
            src: "../assets/imgs/1.jpg",
            title: "Angels Landing",
            description: "A natural wonder in Zion National Park Utah, USA"
        },
        {
            src: "../assets/imgs/2.jpg",
            title: "Tikal",
            description: "Mayan Ruins, Tikal Guatemala"
        },
        {
            src: "../assets/imgs/3.jpg",
            title: "My Image",
            description: "Mayan Image mala"
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
