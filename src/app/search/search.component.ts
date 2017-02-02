import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Book } from '../../Book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

/**
 * @ngdoc Component
 * @name SearchComponent
 * @property searchKey: the value of the input text
 * @property searchResults: an array of objects Book returned by the http request
 * @property searchedItem: the object Book selected
 * @requires SearchService and the Book object class
 * @method googleSearch(): assign the fetched data to the searchResults of Book type
 * @method bookSelected(book): onBlur( on input text ), assign to searchedItem the input text value
 **/

export class SearchComponent {

  searchKey: string;
  searchResults: Book[];
  searchedItem: Book;

  constructor( private _searchService:SearchService ) { }

  googleSearch() {
    this._searchService.googleSearch(this.searchKey).subscribe(res => {
      this.searchResults = res.items;
    });
  }

  bookSelected(book) {
    this.searchResults.filter(item => {
      if(item.volumeInfo.title === book){
        this.searchedItem = item;
      };
    })
  }

}
