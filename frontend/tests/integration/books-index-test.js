import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Books Index', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('should show me a list of available books', function(assert) {
  visit('/books').then(function() {
    assert.equal(find('h1').text(), 'Favorite Books!');
  });
});
