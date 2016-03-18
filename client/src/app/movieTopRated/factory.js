(function() {
  'use strict';

  function MovieTopRatedService($http, $log) {

    var service = {};

    service.movieTopRated = []; // MovieService.movie = [];

    /**
     * Get Movie
     */
    service.getMovieTopRated = function () {

      var key = '5bb1ba18b86c3125820db6f794cd67dd';

      return $http.get('https://api.themoviedb.org/3/movie/top_rated', {
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

  angular.module('services.movieTopRated', [])
    .factory('MovieTopRatedService', MovieTopRatedService);
})();
