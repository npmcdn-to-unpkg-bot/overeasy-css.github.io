var app = angular.module('overeasyDocs-app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {  

    $routeProvider
        .when('/', { templateUrl: 'views/home.html' } )
        .when('/getting-started', { templateUrl: 'views/getting-started.html' } )
        .when('/grid', { templateUrl: 'views/grid.html' } )
        .when('/flex', { templateUrl: 'views/flex.html' } )
        .when('/whitespace', { templateUrl: 'views/whitespace.html' } )
        .when('/layout', { templateUrl: 'views/layout.html' } )
        .when('/typography', { templateUrl: 'views/typography.html' } )
        .when('/colors', { templateUrl: 'views/colors.html' } )
        .when('/backgrounds', { templateUrl: 'views/backgrounds.html' } )
        .when('/borders', { templateUrl: 'views/borders.html' } )
        .when('/buttons', { templateUrl: 'views/buttons.html' } )
        .when('/input-fields', { templateUrl: 'views/input-fields.html' } )
        .when('/configure', { templateUrl: 'views/configure.html' } )
        .otherwise( { redirectTo: '/' } );

}]);

app.controller('MainController', function ($scope, $location, $rootScope) {

    $scope.isCurrentLocation = function (loc) {
        return loc === $location.path();
    }

    $scope.isActive = function (loc) {
        if ($scope.isCurrentLocation(loc)) {
            return 'bg-yellow-lighter';
        } else {
            return '';
        }
    }

    $scope.toggleNav = function () {
        if ($scope.navOpen) {
            $scope.navOpen = false;
        } else {
            $scope.navOpen = true;
        }
        return $scope.navOpen;
    }

    $scope.init = function () {
        $scope.navOpen = false;
    }

    $scope.init();

    $scope.$on('$routeChangeSuccess', function () {
        $scope.init();
    });

});
