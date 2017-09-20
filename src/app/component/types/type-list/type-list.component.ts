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
      // this.typeList = [new TypeModel(1, "Type1", new Date(), 0), new TypeModel(2, "Type 2", new Date(), 1)];
      console.log("1: ", this.typeList);
      this.typeList = this.typeApi.getTypeModelList();
      console.log("2: ", this.typeList);
      this.typeApi.typesChanged.subscribe(
          (typeList: TypeModel[]) => this.typeList = typeList
      );
      console.log("3: ", this.typeList);
  }
  onSelect(typeModel: TypeModel) {
    this.typeSelected.emit(typeModel);
  }

}
