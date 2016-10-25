(function () {
    var app = angular.module('VideoApp', ['ngRoute', 'ngSanitize']);
    app.controller('Visit1', ['$scope', function ($scope) {
        $scope.header = 'Lorem ipsum dolor sit amet';
        $scope.header2 = 'Nemo enim ipsam voluptatem quia voluptas.';
        $scope.header3 = 'Ipsam voluptatem';
        $scope.header4 = 'Quiavoluptatem';
        $scope.visits = [
            {
                image: 'img/visit1.jpg',
                boldText: 'Excepteur sint occaecat cupidatat non proident',
                normalText: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }, {
                image: 'img/visit2.jpg',
                boldText: 'Excepteur sint occaecat cupidatat',
                normalText: 'Abore et dolore magna aliqua. Ut'
                        }, {
                image: 'img/visit3.jpg',
                boldText: 'Dolore magna aliqua',
                normalText: 'In voluptate velit esse cillum dolore eu fugiat!'
                        }, {
                image: 'img/visit4.jpg',
                boldText: 'Sunt in voluptate velit esse cillum dolore eu fugiat',
                normalText: 'Excepteur sint voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                        }];
                    }]);
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/visit1', {
                templateUrl: 'views/visit1.html'
            }).when('/visit2', {
                templateUrl: 'views/visit2.html'
            })
            .when('/visit3', {
                templateUrl: 'views/visit3.html'
            })
            .when('/visit4', {
                templateUrl: 'views/visit4.html'
            })
            .otherwise({
                redirectTo: '/visit1'
            });

        //        $locationProvider
        //            .html5Mode(true);

    }]);
    
//Breadcrumbs part
    app.factory('routeChecker', ['$location', function ($location) {
        return {
            isActive: function (location) {
                return (-1 !== $location.path().indexOf(location));
            }
        };
    }])

    app.controller('breadCrumbs', ['$scope', 'routeChecker', function ($scope, routeChecker) {
        $scope.routeChecker = routeChecker;
    }]);

})();