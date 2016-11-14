import { MarsColonyProjectPage } from './app.po';

describe('mars-colony-project App', function() {
  let page: MarsColonyProjectPage;

  beforeEach(() => {
    page = new MarsColonyProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
