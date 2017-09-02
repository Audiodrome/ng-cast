angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    currentVideo: '<'
  },
  controller: function() {
    console.log(this.currentVideo, 'videoplayer');
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
