(function() {
  'use strict';

  function MovieLatestService($http, $log) {

    var service = {};

    service.movieLatest = []; // MovieService.movie = [];

    /**
     * Get Movie
     */
    service.getMovie = function () {

      var key = '5bb1ba18b86c3125820db6f794cd67dd';

      return $http.get('https://api.themoviedb.org/3/movie/latest', {
          params:{
            api_key: key
          }
        })
        .success(function (data) {
          service.media = data;
        })
        .error(function () {
          console.log('error');
        });
    };
    return service;
  }

  angular.module('services.movieLatest', [])
    .factory('movieLatestService', MovieLatestService);
})();
