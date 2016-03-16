(function() {
  'use strict';

  function movieDetailService($http, $log, $stateParams) {

    var service = {};

    service.movieDetail = []; // MovieService.movie = [];

    /**
     * Get Movie
     */
    service.getMovie = function () {

      var key = '5bb1ba18b86c3125820db6f794cd67dd';


      return $http.get('http://api.themoviedb.org/3/movie/'+ $stateParams.movieId,{
          params:{

            api_key: key,


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

  angular.module('services.movieDetail', [])
    .factory('movieDetailService', movieDetailService);
})();
