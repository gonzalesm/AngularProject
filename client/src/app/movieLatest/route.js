(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.movieLatest', {
        url: '/movie-latest',
        views: {
          '@': {
            template: '<movie-latest></movie-latest>',
          }
        }
      });
  }

  angular.module('movie-latest', ['movieLatestDirective'])
    .config(config)
})();
