import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Book } from '../../Book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

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
