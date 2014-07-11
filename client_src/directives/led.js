MoarInput.directive('led', () => {
  return {
    templateUrl: 'directives/led.html',
    scope: {
      data: '=led'
    },
    controller: $scope => {
      $scope.values = {};

      $scope.paramsList = params => params.join(', ');

      $scope.act = action => {
        $scope.data.params = $scope.values;
        $scope.data.$save({action: action.name});
      };
    }
  };
});