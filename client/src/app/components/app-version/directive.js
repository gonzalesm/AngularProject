(function() {
  'use strict';

  function AppVersionComponent(version) {
    return {
      restrict: 'EA',
      /*jshint unused:false*/
      link: function(scope, elm, attrs) {
        elm.text(version);
      }
    };
  }

  angular.module('appVersionComponent', [])
    .directive('appVersion', AppVersionComponent);
})();
