(function() {
  'use strict';

  function movieLatest(movieLatestService) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: './src/app/movieLatest/template.html',
      scope: {},
      controllerAs: 'vm',
      bindToController: true,
      /*jshint unused:false*/
      controller: function($log) {
        var vm = this;

        movieLatestService.getMovie().then(function(data){
          console.log(data.data);
          vm.movie = data.data;
        });
      },
      link: function(scope, elm, attrs) {
      }
    };
  }



  angular.module('movieLatestDirective', ['services.movieLatest'])
    .directive('movieLatest', movieLatest);
})();
