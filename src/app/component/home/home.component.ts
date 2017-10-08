import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    images: string[] = [
             '../assets/imgs/1.jpg',
             '../assets/imgs/2.jpg',
             '../assets/imgs/3.jpg'
           ]
  constructor() { }

  ngOnInit() {
    console.log("Init");
  }

}
