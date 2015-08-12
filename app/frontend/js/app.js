angular.module('AddressBook', []).
controller('FindUser', function($scope) {
    $scope.userId = 0;
    $scope.findUser = function () {
        console.log("find User" + $scope.userId);
    }
});