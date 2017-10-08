import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TypeModel} from "../type-model";
import {convertValueToOutputAst} from "@angular/compiler/src/output/value_util";
import {TypeApiService} from "../../../services/type-api.service";

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
   typeList: TypeModel[];

  // typeModel = new TypeModel("Name", "description");
  @Output() typeSelected = new EventEmitter();
  constructor(private typeApi: TypeApiService) { }

  ngOnInit() {
      this.typeList = this.typeApi.getTypeModelList();
      this.typeApi.typesChanged.subscribe(
          (typeList: TypeModel[]) => this.typeList = typeList
      );
  }
  onSelect(typeModel: TypeModel) {
    this.typeSelected.emit(typeModel);
  }

}
