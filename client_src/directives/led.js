MoarInput.directive('led', () => {
  return {
    templateUrl: 'directives/led.html',
    scope: {
      data: '=led'
    },
    controller: $scope => {
    }
  };
});