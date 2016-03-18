(function() {
  'use strict';

  function search(searchService) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: './src/app/search/template.html',
      scope: {},
      controllerAs: 'vm',
      bindToController: true,
      /*jshint unused:false*/
      controller: function($log, $stateParams) {
        var vm = this;

        searchService.getSearch().then(function(data){
          vm.movies = data.data.results;
          
        });
      },
      link: function(scope, elm, attrs) {
      }
    };
  }



  angular.module('searchDirective', ['services.search'])
    .directive('search', search);
})();
