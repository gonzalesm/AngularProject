(function() {
  'use strict';

  function MovieService($http, $log) {

    var service = {};

    service.media = []; // MovieService.movie = [];

    service.genre = [];

    /**
     * Get Movie
     */
    service.getMovie = function () {
      var key = '5bb1ba18b86c3125820db6f794cd67dd';

      return $http.get('https://api.themoviedb.org/3/movie/popular', {
        params:{
          api_key: key
        }
      })
      .success(function (data) {
        service.media = data;
      })
      .error(function () {
        console.log('error movie');
      });
    };

    service.getGenre = function () {
      var key = '5bb1ba18b86c3125820db6f794cd67dd';

      return $http.get('https://api.themoviedb.org/3/genre/movie/list', {
        params:{
          api_key: key
        }
      })
      .success(function (data) {
        service.genre = data;
      })
      .error(function() {
        console.log('error genre');
      });
    };

    return service;

  }

  angular.module('services.movie', [])
    .factory('MovieService', MovieService);
})();
