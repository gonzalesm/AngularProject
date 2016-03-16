(function() {
  'use strict';

  function MovieService($http, $log) {

    var service = {};

    service.movie = []; // MovieService.movie = [];

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
          console.log('error');
        });
    };

    return service;

  }

  function MovieGenre($http, $log) {

    var service = {};

    service.movie = []; // MovieService.movie = [];

    /**
     * Get Genre
     */
    service.getGenre = function () {

      var key = 'a50dfcb86a14a582d3985d8df03992b7';

      return $http.get('http://api.themoviedb.org/3/genre/movie/list', {
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

  angular.module('services.movie', [])
    .factory('MovieService', MovieService)
    .factory('MovieGenre', MovieGenre);
})();
