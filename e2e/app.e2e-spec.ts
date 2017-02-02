import { GBookSearchPage } from './app.po';

describe('g-book-search App', function() {
  let page: GBookSearchPage;

  beforeEach(() => {
    page = new GBookSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
