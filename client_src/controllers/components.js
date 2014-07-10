MoarInput.controller('ComponentsCtrl', ($scope, Component) => {

	$scope.components = Component.query();

});