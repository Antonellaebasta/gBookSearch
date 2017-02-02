import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
