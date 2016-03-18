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
          for (var i=0; i<=vm.movies.length-1; i++) {
            vm.movies[i].vote = (vm.movies[i].vote_average*10);
          }
          searchService.getGenre().then(function(data){
              vm.genres = data.data.genres;
              for (var i=0; i<=vm.movies.length-1; i++) {
                vm.movies[i].genre = [];
                for (var j=0; j<=vm.genres.length-1; j++) {
                  var k = vm.movies[i].genre_ids.length-1;
                  while (k>=0) {
                    if(vm.movies[i].genre_ids[k] == vm.genres[j].id){
                      vm.movies[i].genre.push(vm.genres[j].name);
                      vm.movies[i].genre.sort();
                    }
                    k--;
                  }
                }
              }
          });
        });
      },
      link: function(scope, elm, attrs) {
      }
    };
  }



  angular.module('searchDirective', ['services.search'])
    .directive('search', search);
})();
