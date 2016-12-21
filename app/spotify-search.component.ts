/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { FormsService } from './forms.service'

@Component({
  selector: 'spotify-search',
  template: `
        <input id="search" type="text" class="form-control" placeholder="Search on Spotify ...">
    `
})
export class SpotifySearch {
  constructor() {
    var keyups = Observable.fromEvent($('#search'), 'keyup')
      .map(e => e.target.value)
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(searchTerm => {
        var url = "https://api.spotify.com/v1/search?q=" + searchTerm + "&type=artist";
        var promise = $.getJSON(url);
        return Observable.fromPromise(promise);
      });

    keyups.subscribe(data => {
      data.artists.items && data.artists.items.map(artist => {
        let formsservice = new FormsService;
        let result = formsservice.replace.spaceWithHyphen(artist.name);
        console.log(formsservice.toLower(result))
        //search only once
        //keyups.unsubscribe()
      });
    });

  }
}