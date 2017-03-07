angular.module("register")
    .service("registerSvc", ["$http", "$q", function ($http, $q) {

        this.register = function (data) {
            var dfd = $q.defer();
            $http.post("/api/register", {
                    register: data
                })
                .then(function (response) {
                    dfd.resolve(response);
                }).catch(function (response, data) {
                    dfd.reject(response);
                });
            return dfd.promise;
        };
        this.getProfiles = function () {
            var dfd = $q.defer();
            $http.get("/api/getAllUsers")
                .then(function (response) {
                    console.log(response.data);
                }).catch(function (response, data) {
                    dfd.reject(response);
                });
            return dfd.promise;
        };
        this.authenticate = function (data) {
            var dfd = $q.defer();

            $http.post("/api/authenticateUser", data)
                .then(function (response) {
                    dfd.resolve(response);
                }).catch(function (response) {
                    dfd.reject(response);
                });
            return dfd.promise;
        };
}])
