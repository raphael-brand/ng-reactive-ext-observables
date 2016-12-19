import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search ...">
    `
})
export class AppComponent {
    constructor(){
      console.log(new Observable())
    }
}