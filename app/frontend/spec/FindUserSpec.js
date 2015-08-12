describe("FindUser Functionality ", function() {

    var $rootScope, $scope, $controller;

    beforeEach(module('AddressBook'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        $controller('FindUser', {'$rootScope' : $rootScope, '$scope': $scope});
    }));


   it('should find the user for given id ', function() {
        $scope.userId  = 12;
        $scope.findUser();
        expect($scope.user.id == $scope.userId);
   });

});
