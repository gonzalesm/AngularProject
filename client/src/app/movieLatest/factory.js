(function() {
  'use strict';

  function movieLatestService($http, $log) {

    var service = {};

    service.movieLatest = []; // movieLatestService.movieLatest = [];

    /**
     * Get Movie
     */
    service.getMovieLatest = function () {

      var key = '5bb1ba18b86c3125820db6f794cd67dd';

      return $http.get('https://api.themoviedb.org/3/movie/latest', {
          params:{
            api_key: key,
            page: 1
          }
        })
        .success(function (data) {
          service.media = data;
          console.log(service.media);
        })
        .error(function () {
          console.log('error');
        });
    };
    return service;
  }

  angular.module('services.movieLatest', [])
    .factory('movieLatestService', movieLatestService);
})();
