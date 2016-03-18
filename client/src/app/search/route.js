(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.search', {
        url: '/search/:query',
        views: {
          '@': {
            template: '<search></search>',
          }
        }
      });
  }

  angular.module('search', ['searchDirective'])
    .config(config)
})();
