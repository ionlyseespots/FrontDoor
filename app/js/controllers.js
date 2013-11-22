'use strict';
frontDoor.app.controller('MyController', function($scope, angularFire) {
    var ref = new Firebase("https://ionlyseespots.firebaseio.com/list");
    $scope.items = [];
    $scope.addItem = function() {
        $scope.items.push($scope.newItem);
        $scope.newItem = "";
    }
    angularFire(ref, $scope, "items");
});