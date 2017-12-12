import { Angular4CourseProjectPage } from './app.po';

describe('angular4-course-project App', () => {
  let page: Angular4CourseProjectPage;

  beforeEach(() => {
    page = new Angular4CourseProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
