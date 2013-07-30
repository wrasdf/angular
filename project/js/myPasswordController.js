function PasswordCtrl($scope) {
    $scope.password = '';
    $scope.securityCheck = '';
    $scope.grade = function() {
        var size = $scope.password.length;
        if (size > 8) {
            $scope.securityCheck = 'strong';
        } else if (size > 3) {
            $scope.securityCheck = 'medium';
        } else {
            $scope.securityCheck = 'weak';
        }
    };
}