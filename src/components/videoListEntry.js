// var VideoListEntryCtrl = function($scope) {

// }

angular.module('video-player')
.component('videoListEntry', {
  // TODO
  templateUrl: 'src/templates/videoListEntry.html',
  controller: VideoListEntryCtrl,
  bindings: {
    dummy: '<'
  }
});

// function VideoListEntryCtrl($scope) {
//   // console.log($scope.$ctrl);
//   // var ctrl = this;
//   //console.log(ctrl);
// }