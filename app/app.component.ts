import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import {ControlGroup, FormBuilder} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
          <input type="text" ngControl="search" class="form-control">
        </form>
    `
})
export class AppComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder){
      this.form = fb.group({
        search: []
      });

      var search = this.form.find('search');
      search.valueChanges.subscribe(x => console.log(x));
      //console.log(new Observable())
    }
}