import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchKey: string;

  constructor() { }

  googleSearch() {

  }

  bookSelected(book) {
    console.log(book);
  }

}
