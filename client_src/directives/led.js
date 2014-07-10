MoarInput.directive('led', () => {
  return {
    templateUrl: 'directives/led.html',
    scope: {
      data: '=led'
    },
    controller: $scope => {
      $scope.on = function() {
        $scope.data.value = 1;
        $scope.data.$save();
      };

      $scope.off = function() {
        $scope.data.value = 0;
        $scope.data.$save();
      };
    }
  };
});