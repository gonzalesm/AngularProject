(function() {
  'use strict';

  function movieDetail(movieDetailService) {
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
        console.log($stateParams);
        movieDetailService.getMovie().then(function(response){
          vm.movie = response.data;
        });
      },
      link: function(scope, elm, attrs) {
      }
    };
  }

  angular.module('movieDetailDirective', ['services.movieDetail'])
    .directive('movieDetail', movieDetail);
})();
