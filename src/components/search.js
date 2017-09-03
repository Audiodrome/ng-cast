angular.module('video-player')

.component('search', {
  // TODO
  controller: function() {
    this.input = '';
    this.result = function() {
      this.query = this.input;
      
      console.log(this.query);
      this.input = '';
    };
    this.storeQuery = function() {
      this.query = this.input;
      this.input = '';
    };
  },
  templateUrl: 'src/templates/search.html'
});
