import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
@Injectable()
export class WindowService {
  public window = new BehaviorSubject(null);

  public width: Observable<number>;

  constructor() {
    let windowSize = new BehaviorSubject(getWindowSize());

    this.width = (windowSize.pluck('width') as Observable<number>).distinctUntilChanged();

    Observable.fromEvent(window, 'resize').map(getWindowSize).subscribe(windowSize);
  }


}

function getWindowSize() {
  return {
    width: window.innerWidth
  };
}
