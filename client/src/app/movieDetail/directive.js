(function() {
  'use strict';

  function movieDetail(MovieService) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: './src/app/movieDetail/template.html',
      scope: {},
      controllerAs: 'vm',
      bindToController: true,
      /*jshint unused:false*/
      controller: function($log, $stateParams) {

        var vm = this;
        console.log();

        MovieService.getMovie().then(function(data){
          console.log(data.data.results);
          vm.movies = data.data.results;
        });
      },
      link: function(scope, elm, attrs) {
      }
    };
  }

  angular.module('movieDetailDirective', ['services.movie'])
    .directive('movieDetail', movieDetail);
})();
