(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/home/home.tpl.html",
    "<div class=\"pure-g\">\n" +
    "  <div class=\"island3 pure-u-1 pure-u-lg-2-3\">\n" +
    "    <h3>Speed up your <strong>AngularJS</strong> development with a complete and scalable build system that scaffolds the project for you. Just focus on writing code and tests,\n" +
    "                <code>angular-kickstart</code> will take care of the rest.</h3>\n" +
    "  </div>\n" +
    "  <div class=\"island3 pure-u-1 pure-u-lg-1-3\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"pure-g island\">\n" +
    "  <ul class=\"hlist pure-u-1\">\n" +
    "    <li>\n" +
    "      <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=vesparny&amp;repo=angular-kickstart&amp;type=watch&amp;count=true\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"85px\" height=\"20px\"></iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=vesparny&amp;repo=angular-kickstart&amp;type=fork&amp;count=true\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"85px\" height=\"20px\"></iframe>\n" +
    "    </li>\n" +
    "    <li class=\"tweet-btn\">\n" +
    "      <a class=\"tweet\" href=\"https://twitter.com/intent/tweet?via=vesparny&related=vesparny&text=angular-kickstart - speed up @angularjs development and testing with a great @gulpjs build system. http://bit.ly/angular_kickstart\">Tweet</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<hr/>\n" +
    "<div class=\"pure-g island\">\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <div class=\"text-center\">\n" +
    "      <img class=\"pure-img\" src=\"assets/images/angular-logo.png\">\n" +
    "    </div>\n" +
    "    <h3>AngularJS</h3>\n" +
    "    <p>The best JavaScript framework out there will power up your awesome app.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <div class=\"text-center\">\n" +
    "      <img class=\"pure-img\" src=\"assets/images/gulp-logo.png\">\n" +
    "    </div>\n" +
    "    <h3>Gulpjs</h3>\n" +
    "    <p>A smart and scalable <a href=\"http://gulpjs.com\" target=\"_blank\">gulpjs</a> based build system will take care of your development and testing workflow, as well as the optimization process for production release. <a href ui-sref=\"root.getting-started\">Read more...</a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <div class=\"text-center\">\n" +
    "      <img class=\"pure-img\" src=\"assets/images/bower-logo.png\">\n" +
    "    </div>\n" +
    "    <h3>Bower</h3>\n" +
    "    <p><a href=\"http://bower.io\" target=\"_blank\">Bower</a> will handle your front-end dependencies.</p>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"pure-g island\">\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Sass + SMACSS</h4>\n" +
    "    <p><a href=\"http://sass-lang.com/\" target=\"_blank\">Sass</a> is the most mature, stable, and powerful professional grade CSS extension language. The project is structured following the <a href=\"http://smacss.com/\" target=\"_blank\">SMACSS</a> architecture.\n" +
    "      Write your CSS in a modular and scalable way, the build system will compile your <code>.scss</code> files into a single css files. It should be easy to integrate less, stylus or any other preprocessor if you prefer. <a href=\"http://purecss.io/\" target=\"_blank\">Pure</a> is the default CSS framework, by you can easily plug your own.</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Modular Structure</h4>\n" +
    "    <p>angular-kickstart comes with a\n" +
    "      <code>by-feature</code> files organization, keeping your code organized, especially if you are working on a large code-base. If you don't like it, just use your preferred structure, and the build system will still work. The code is written following <a href=\"https://github.com/toddmotto/angularjs-styleguide\" target=\"_blank\">best practices</a> that make you able to write consistent code. <a href ui-sref=\"root.getting-started\">Read more...</a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Keep Your Code Reusable</h4>\n" +
    "    <p>Every general purpose directive, service or filter, should be placed into the  <code>common</code> directory, in this way you can copy and paste the directory into another project, require the module you need, and you are ready to go with your new project.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"pure-g\">\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Unit testing</h4>\n" +
    "    <p>The build system comes with a special task for running tests by using <a href=\"http://karma-runner.github.io/\" target=\"_blank\">Karma Test Runner</a>.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>e2e testing</h4>\n" +
    "    <p>end-to-end testing support is provided by the build system. Tests can be executed using <a href=\"http://angular.github.io/protractor/\" target=\"_blank\">protractor</a>.</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Build for production with ease</h4>\n" +
    "    <p>Easily optimize css js and images files for production.</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();
