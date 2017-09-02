angular.module('video-player')
.service('youTube', function($http){
  // TODO
  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search'
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});
