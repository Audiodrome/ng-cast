// var AppCtrl = function($scope) {

//   this.dummies = window.exampleVideoData;
// };

angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: AppCtrl,
  bindings: {
    dummies: '<'
  }
});

// function AppCtrl($scope) {
//   this.dummies = window.exampleVideoData;
// }
