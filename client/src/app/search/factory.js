(function() {
  'use strict';

  function searchService($http, $log, $stateParams) {

    var service = {};

    service.search = []; // MovieService.movie = [];

    /**
     * Get Movie
     */
    service.getSearch = function () {

      var key = '5bb1ba18b86c3125820db6f794cd67dd';
      console.log($stateParams.query);


      return $http.get('http://api.themoviedb.org/3/search/movie', {
          params:{
            api_key: key,
            query: $stateParams.query
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

  angular.module('services.search', [])
    .factory('searchService', searchService);
})();
