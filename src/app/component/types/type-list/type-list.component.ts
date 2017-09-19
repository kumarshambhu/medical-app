import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TypeModel} from "../type-model";
import {convertValueToOutputAst} from "@angular/compiler/src/output/value_util";

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  typeList: TypeModel[] = [];

  typeModel = new TypeModel("Name", "description");
  @Output() typeSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelect(typeModel: TypeModel) {
    console.log(typeModel);
    this.typeSelected.emit(typeModel);
  }

}
