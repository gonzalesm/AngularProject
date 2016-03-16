(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.movieDetail', {
        url: '/movie-detail/:movieId',
        views: {
          '@': {
            template: '<movie-detail></movie-detail>',
          }
        }
      });
  }

  angular.module('movie-detail', ['movieDetailDirective'])
    .config(config)
})();
