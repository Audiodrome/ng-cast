angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    searchResults: '<'
  },
  controller: function($scope, youTube) {
    this.input = '';
    var ctrl = this;
    this.result = function() {
      youTube.search(this.input).then(function(data) {
        this.data = data;
        ctrl.searchResults(this.data.data.items);
      });
      this.input = '';
    };
  },
  templateUrl: 'src/templates/search.html'
});
