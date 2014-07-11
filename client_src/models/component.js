MoarInput.factory('Component', $resource => $resource('/components/:id/:action', {id: '@id', action: '@action'}));
