export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {
    toggleBookForm: function() {
      this.toggleProperty('isShowingForm');
  }
});
