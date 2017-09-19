import { Component, OnInit } from '@angular/core';
import {TypeModel} from "./type-model";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  selectedTypeModel: TypeModel;
  constructor() { }

  ngOnInit() {
  }

}
