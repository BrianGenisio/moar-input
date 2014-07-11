MoarInput.directive('actions', () => {
  return {
    templateUrl: 'directives/actions.html',
    scope: {
      data: '=actions'
    },
    controller: $scope => {
      $scope.values = {};

      $scope.paramsList = params => params.join(', ');

      $scope.actionValues = action => $scope.values[action] = $scope.values[action] || {};

      $scope.act = action => {
        $scope.data.params = $scope.values[action.name];
        $scope.data.$save({action: action.name});
      };
    }
  };
});