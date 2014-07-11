MoarInput.directive('piezo', () => {
  return {
    templateUrl: 'directives/piezo.html',
    scope: {
      data: '=piezo'
    },
    controller: $scope => {
    }
  };
});