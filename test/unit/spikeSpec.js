'use strict';

describe('Password Controller',function(){

    var passwordController, scope;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        passwordController = $controller('PasswordCtrl', {
            $scope: scope
        });
    }));

    it("should return correct password security", function(){
        scope.password = "test";
        scope.grade();
        expect(scope.securityCheck).toBe("medium");
    })


});



