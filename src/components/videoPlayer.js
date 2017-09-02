angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    currentVideo: '<'
  },
  controller: function($sce) {
// var ctrl = this;
    var a = $sce.trustAsHtml('sting');
    console.log(a);
    // this.id = $sce.trustAsHtml(this.currentVideo.id.videoId)
    console.log();
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
