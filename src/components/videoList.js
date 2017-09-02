angular.module('video-player')

.component('videoList', {
  // TODO
  bindings: {
    videos: '<'
  },
  controller: function() {
    // console.log(this, 'this');
    this.onClick = () => {};
  },
  templateUrl: 'src/templates/videoList.html'

});
