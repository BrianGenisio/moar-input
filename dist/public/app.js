"use strict";
var angular = require('angular');
var angularResource = require('github:components/angular-resource');
var MoarInput = angular.module('moarInput', ['ngResource']);
MoarInput.controller('ComponentsCtrl', (function($scope, Component) {
  $scope.components = Component.query();
}));
MoarInput.factory('Component', (function($resource) {
  return $resource('/components/:id', {id: '@id'});
}));
MoarInput.directive('led', (function() {
  return {
    templateUrl: 'directives/led.html',
    scope: {data: '=led'},
    controller: (function($scope) {
      $scope.on = function() {
        $scope.data.value = 1;
        $scope.data.$save();
      };
      $scope.off = function() {
        $scope.data.value = 0;
        $scope.data.$save();
      };
    })
  };
}));
angular.module("moarInput").run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/led.html", "<div class=\"component led\">\n	<div ng-if=\"!data.value\">\n		<button class=\"btn default\" ng-click=\"on()\">Off</button>\n	</div>\n	<div ng-if=\"data.value\">\n		<button class=\"btn default\" ng-click=\"off()\">On</button>\n	</div>\n</div>");
  $templateCache.put("views/components.html", "<div class=\"components list\" ng-controller=\"ComponentsCtrl\">\n	<h2>Components</h2>\n\n	<ul>\n		<li ng-repeat=\"component in components\">\n			<span ng-switch=\"component.type\">\n				<span ng-switch-when=\"Led\">\n					<span led=\"component\"></span>\n				</span>\n\n				<span ng-switch-default>\n					Unknown component: {{component}}\n				</span>\n			</span>\n		</li>\n	</ul>	\n</div>\n\n");
}]);

//# sourceMappingURL=app.js.map