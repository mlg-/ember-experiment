import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books', { path: '/books' });
  this.route('book', { path: 'book/:book_id'});
  this.route('new-book', { path: 'books/new'});
});

export default Router;
