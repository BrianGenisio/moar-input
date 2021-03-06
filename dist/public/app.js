"use strict";
var MoarInput = angular.module('moarInput', ['ngResource']);
MoarInput.controller('ComponentsCtrl', (function($scope, Component) {
  $scope.components = Component.query();
}));
MoarInput.factory('Component', (function($resource) {
  return $resource('/components/:id/:action', {
    id: '@id',
    action: '@action'
  });
}));
MoarInput.directive('actions', (function() {
  return {
    templateUrl: 'directives/actions.html',
    scope: {data: '=actions'},
    controller: (function($scope) {
      $scope.values = {};
      $scope.paramsList = (function(params) {
        return params.join(', ');
      });
      $scope.actionValues = (function(action) {
        return $scope.values[action] = $scope.values[action] || {};
      });
      $scope.act = (function(action) {
        $scope.data.params = $scope.values[action.name];
        $scope.data.$save({action: action.name});
      });
    })
  };
}));
MoarInput.directive('led', (function() {
  return {
    templateUrl: 'directives/led.html',
    scope: {data: '=led'},
    controller: (function($scope) {})
  };
}));
MoarInput.directive('piezo', (function() {
  return {
    templateUrl: 'directives/piezo.html',
    scope: {data: '=piezo'},
    controller: (function($scope) {})
  };
}));
angular.module("moarInput").run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/actions.html", "<ul>\n	<li ng-repeat=\"action in data.actions\">\n\n		<button ng-click=\"act(action)\">{{action.name}}({{paramsList(action.params)}})</button>\n		<span ng-repeat=\"param in action.params\">\n			<input placeholder=\"{{param}}\" ng-model=\"actionValues(action.name)[param]\" />\n		</span>\n\n	</li>\n</ul>");
  $templateCache.put("directives/led.html", "<div class=\"component led\">\n\n	<h3>LED IS {{data.value ? \'ON\' : \'OFF\'}}\n\n	<div actions=\"data\"></div>\n\n</div>");
  $templateCache.put("directives/piezo.html", "<div class=\"component led\">\n\n	<h3>Piezo:</h3>\n\n	<div actions=\"data\"></div>\n\n</div>");
  $templateCache.put("views/components.html", "<div class=\"components list\" ng-controller=\"ComponentsCtrl\">\n	<h2>Components</h2>\n\n	<ul>\n		<li ng-repeat=\"component in components\">\n			<span ng-switch=\"component.type\">\n				<span ng-switch-when=\"Led\">\n					<span led=\"component\"></span>\n				</span>\n\n				<span ng-switch-when=\"Piezo\">\n					<span piezo=\"component\"></span>\n				</span>\n\n				<span ng-switch-default>\n					Unknown component: {{component}}\n				</span>\n			</span>\n		</li>\n	</ul>	\n</div>\n\n");
}]);

//# sourceMappingURL=app.js.map