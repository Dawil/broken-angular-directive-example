angular.module('Example',[])
.controller('Ctrl', function($scope) {
    $scope.messages = { greeting: 'Hello', farewell: 'Goodbye' };
})
.directive('myGroup', function(){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: { sharedProp: '=' },
        template:
              '<div>'
            +   '<p>Stuff.</p>'
            +   '<div ng-repeat="_ in [1]"><div ng-transclude></div></div>'
            + '</div>'
    };
})
.directive('mySingle', function(){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: true,
        link: function(scope,element,attrs) {
            scope.prop =  attrs.singleProp; 
        },
        controller: function($scope) {
            console.log($scope);
            console.log($scope.sharedProp);
            $scope.getMessage = function() { 
              console.log('msg:',$scope);
              return $scope.sharedProp[$scope.prop]; 
            };
        },
        template:
              '<div>'
            +   '<span ng-transclude></span>'
            +   '<p>Prop: {{ prop }}</p>'
            +   '<p>Message: {{getMessage()}}</p>'
            + '</div>'
    };
});
