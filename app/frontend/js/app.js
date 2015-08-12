angular.module('AddressBook', []).

controller('FindUser', function($scope, $http) {
    $scope.userId = 0;
    $scope.user = null;
    
    $scope.findUser = function () {
        console.log("find User " + $scope.userId);

        $http.get('/address/' + $scope.userId).
          success(function(data, status, headers, config) {
            console.log(data);
            $scope.user = data;
          }).
          error(function(data, status, headers, config) {
            console.error("User Request error")
          });
      }
});