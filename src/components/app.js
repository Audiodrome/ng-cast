angular.module('video-player')

.component('app', {
  // TODO

  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    var ctrl = this;
    this.selectVideo = function(videoSelected) {
      // console.log(this, 'this');
      // console.log(ctrl, 'ctrl');
      // console.log('I made it');
      // console.log(videoSelected, 'the selected video');
      this.currentVideo = videoSelected;
      // console.log(ctrl.currentVideo, 'SELECTED VIDEO')
    };
    this.searchResults = function() {};
  },
  templateUrl: 'src/templates/app.html',


});
