var IndexController = Ember.ArrayController.extend({
  page: 2,
  isLoadingMore: false,

  actions: {
    getMore: function() {
      this.set('isLoadingMore', true);

      this.incrementProperty('page');
      var url = 'http://api.dribbble.com/shots/popular/?page=' + this.get('page') + '&callback=?';

      $.getJSON(url, function(data) {
        this.pushObjects(data.shots);
        this.set('isLoadingMore', false);

      }.bind(this));
    }
  }
});

export default IndexController;
