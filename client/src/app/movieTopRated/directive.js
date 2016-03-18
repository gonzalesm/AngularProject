(function() {
  'use strict';

  function movieTopRated(movieTopRatedService) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: './src/app/movieTopRated/template.html',
      scope: {},
      controllerAs: 'vm',
      bindToController: true,
      /*jshint unused:false*/
      controller: function($log) {
        var vm = this;

        movieTopRatedService.getMovie().then(function(data){

          vm.movies = data.data.results;
          console.log(data.data.results);
        });
      },
      link: function(scope, elm, attrs) {
      }
    };
  }



  angular.module('movieTopRatedDirective', ['services.movieTopRated'])
    .directive('movieTopRated', movieTopRated);
})();