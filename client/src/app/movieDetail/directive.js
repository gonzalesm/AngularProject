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
          vm.movie.vote = (vm.movie.vote_average*10);
          console.log('note :', vm.movie.vote);
        });
        movieDetailService.getGenre().then(function(response){
            vm.genres = response.data.genres;
            for (var i=0; i<=vm.movies.length-1; i++) {
              vm.movies[i].genre = [];
              for (var j=0; j<=vm.genres.length-1; j++) {
                var k = vm.movies[i].genre_ids.length-1;
                while (k>=0) {
                  if(vm.movies[i].genre_ids[k] == vm.genres[j].id){
                    vm.movies[i].genre.unshift(vm.genres[j].name);
                  }
                  k--;
                }
              }
            }
        });
      },
      link: function(scope, elm, attrs) {
      }
    };
  }

  angular.module('movieDetailDirective', ['services.movieDetail'])
    .directive('movieDetail', movieDetail);
})();
