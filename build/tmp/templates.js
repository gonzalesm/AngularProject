(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/home/home.tpl.html",
    "<div class=\"pure-g\">\n" +
    "\n" +
    "  <h1 class=\"pure-u-1\">The TEAM</h1>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h2>Kieran BOGGS</h2>\n" +
    "    <p>\n" +
    "      GitHub : <a href=\"https://github.com/Kier4n\" target=\"_blank\">Kier4n</a></br>\n" +
    "      Twitter : <a href=\"https://twitter.com/\" target=\"_blank\">Kier4n</a></br>\n" +
    "      Mail : <a href=\"#\" target=\"_blank\">@gmail.com</a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h2>Adrien LEFORT DES YLOUSES</h2>\n" +
    "    <p>\n" +
    "      GitHub : <a href=\"https://github.com/AdrienSldy\" target=\"_blank\">AdrienSldy</a></br>\n" +
    "      Twitter : <a href=\"https://twitter.com/\" target=\"_blank\">AdrienSldy</a></br>\n" +
    "      Mail : <a href=\"#\" target=\"_blank\">@gmail.com</a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h2>Michaël GONZALES</h2>\n" +
    "    <p>\n" +
    "      GitHub : <a href=\"https://github.com/GonzalesM\" target=\"_blank\">GonzalesM</a></br>\n" +
    "      Twitter : <a href=\"https://twitter.com/\" target=\"_blank\">GonzalesM</a></br>\n" +
    "      Mail : <a href=\"#\" target=\"_blank\">@gmail.com</a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();
