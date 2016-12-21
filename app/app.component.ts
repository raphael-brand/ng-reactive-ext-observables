import { Component } from 'angular2/core';
import { SpotifySearch } from './spotify-search.component'
import { ImportingOperators } from './importing-operators.component'

@Component({
  selector: 'my-app',
  template: `
      <spotify-search></spotify-search>
      <importing-operators></importing-operators>
    `,
  directives: [SpotifySearch, ImportingOperators]
})
export class AppComponent {
}