import {Component, Input, OnInit} from '@angular/core';
import {TypeModel} from "../type-model";

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
  @Input() selectedType: TypeModel;
  constructor() { }

  ngOnInit() {
  }

}
