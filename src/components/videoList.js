var VideoListCtrl = function($scope) {

  this.dummies = window.exampleVideoData;
};

angular.module('video-player')

.component('videoList', {
  // TODO
  templateUrl: 'src/templates/videoList.html',
  controller: VideoListCtrl,
  bindings: {
    dummy: '<'
  }
});



// function VideoListCtrl($scope) {
//   console.log($scope);
  
//   this.dummies = window.exampleVideoData;
//   // console.log($scope.dummies);
// }

