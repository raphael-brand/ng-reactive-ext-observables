import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import { ControlGroup, FormBuilder } from 'angular2/common';
import { FormsService } from './forms.service'

@Component({
  selector: 'importing-operators',
  template: `
        <form [ngFormModel]="form">
          <input type="text" ngControl="search" class="form-control">
        </form>
    `
})
export class ImportingOperators {
  form: ControlGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      search: []
    });

    var search = this.form.find('search');
    let formsservice = new FormsService;
    search.valueChanges.subscribe(x => {
      let result = formsservice.replace.spaceWithHyphen(x);
      console.log(formsservice.toLower(result))
    });
    //console.log(new Observable())
  }
}