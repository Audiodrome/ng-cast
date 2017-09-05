angular.module('video-player')

.component('app', {
  // TODO

  controller: function($scope, youTube) {
    var ctrl = this;

    youTube.search('javascript tutorial').then(function(data) {
      ctrl.videos = data.data.items;
      ctrl.currentVideo = data.data.items[0];
    });
    this.selectVideo = function(videoSelected) {
      ctrl.currentVideo = videoSelected; 
    };
    this.searchResults = function(youtubeFive) {
      ctrl.videos = youtubeFive;
      ctrl.currentVideo = ctrl.videos[0];
    };
  },
  templateUrl: 'src/templates/app.html',
});
