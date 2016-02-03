import DS from 'ember-data';

var Book = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string'),
  score: DS.attr('string')
});

export default Book;
