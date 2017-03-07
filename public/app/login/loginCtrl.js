angular.module("login")
    .controller("loginCtrl", ["registerSvc", "$scope", function (registerSvc, $scope) {
        $scope.loginData = {
            username: "",
            password: ""
        };
        $scope.loginUser = function () {
            registerSvc.authenticate($scope.loginData)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                });
        };
}]);
