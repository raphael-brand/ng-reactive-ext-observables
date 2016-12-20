import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import {ControlGroup, FormBuilder} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
          <input type="text" ngControl="search">
        </form>
    `
})
export class AppComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder){
      this.form = fb.group({
        search: []
      });
      console.log(new Observable())
    }
}