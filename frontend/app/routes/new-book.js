import DS from 'ember-data';
import Book from '../models/book';

export default Ember.Route.extend({
  model() {
    return this;
  },

  actions: {
    createBook: function() {
      var title = this.get('controller').get('title');
      var author = this.get('controller').get('author');
      var description = this.get('controller').get('description');
      var book = this.store.createRecord('book', {
                                            title: title,
                                            author: author,
                                            description: description});
      // book.save();
      this.get('controller').set('title', '');
      this.get('controller').set('author', '');
      this.get('controller').set('description', '');
    }
  }
});

