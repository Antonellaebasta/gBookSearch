import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * @ngdoc service
 * @name SearchService
 * @property googleUrl: the Google Books API url string
 * @requires Http module to performs any type of http request
 * @method googleSearch(googleUrl), that perform a volumes search by sending an HTTP GET request to the googleUrl
 * @return list of books in JSON format
 **/

@Injectable()
export class SearchService {

  private googleUrl: string;

  constructor( private _http:Http ) { }

  googleSearch( str:string ){
    this.googleUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + str;
      return this._http.get( this.googleUrl )
        .map(res => res.json());
  }

}
