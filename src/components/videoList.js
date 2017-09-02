angular.module('video-player')

.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    selectVideo: '<'
  },
  controller: function($scope) {
    // console.log($scope, 'this');
    this.onClick = function(index) {
      // console.log(this.videos[index]);
      // console.log(this);
      this.selectVideo(this.videos[index]);
    };
  },
  templateUrl: 'src/templates/videoList.html'

});
