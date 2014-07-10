"use strict";
var angular = require('angular');
var angularResource = require('github:components/angular-resource');
var MoarInput = angular.module('moarInput', ['ngResource']);
MoarInput.controller('ComponentsCtrl', (function($scope, Component) {
  $scope.components = Component.query();
}));
MoarInput.factory('Component', (function($resource) {
  return $resource('/components/:id');
}));
angular.module("moarInput").run(["$templateCache", function($templateCache) {
  $templateCache.put("views/components.html", "<div class=\"components list\" ng-controller=\"ComponentsCtrl\">\n	<h2>Components</h2>\n\n	<ul>\n		<li ng-repeat=\"component in components\">\n			{{component.name}}: {{component.value}}\n		</li>\n	</ul>	\n</div>\n\n");
}]);

//# sourceMappingURL=app.js.map