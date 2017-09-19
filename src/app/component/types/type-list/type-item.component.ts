import {Component, Input, OnInit} from '@angular/core';
import {TypeModel} from "../type-model";

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {
  @Input() typeModel: TypeModel;
  typeId: number;
  constructor() { }

  ngOnInit() {
  }

}
