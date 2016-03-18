(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.movieTopRated', {
        url: '/movieTopRated',
        views: {
          '@': {
            template: '<movieTopRated></movieTopRated>',
          }
        }
      });
  }

  angular.module('movieTopRated', ['movieTopRatedDirective'])
    .config(config)
})();