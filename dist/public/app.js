"use strict";
var angular = require('angular');
var angularResource = require('github:components/angular-resource');
var MoarInput = angular.module('moarInput', ['ngResource']);
MoarInput.run((function(Component) {
  Component.query();
}));
MoarInput.factory('Component', (function($resource) {
  return $resource('/components/:id');
}));

//# sourceMappingURL=app.js.map