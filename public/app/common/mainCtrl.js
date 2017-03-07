angular.module("fashionBay")
    .controller("mainCtrl", ["$scope", function ($scope) {

        $scope.headerTemplate = "app/common/header.tpl.ejs";
        $scope.templateUrl = "app/home/home.tpl.html";
        $scope.appName = "FashionBay";
        $scope.loadPage = function (pageType) {
            if (pageType == 'register') {
                $scope.templateUrl = "app/register/register.tpl.html"
            } else if (pageType == 'login') {
                $scope.templateUrl = "app/login/login.tpl.html";
            }
        };

}]);
