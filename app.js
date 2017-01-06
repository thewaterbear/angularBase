angular
  .module('app', [])
  .controller('CountCtrl', function CountCtrl($scope) {

    $scope.count = 4;
    $scope.doSomething = function() {
      console.log("Heyooo, whats the count", $scope.count);
    }

    $scope.exampleText = "Hey i'm an example";
    $scope.exampleArray = ["thing 1", "thing 2", "more things"];
   

  })
  .component('counter', {
        bindings: {
          count: '='
        },
        controller: function () {
          function increment() {
            this.count++;
          }
          function decrement() {
            this.count--;
          }
          this.increment = increment;
          this.decrement = decrement;
          
        },
        template: [
          '<div class="todo">',
            '<input type="text" ng-model="$ctrl.count">',
            '<button type="button" ng-click="$ctrl.decrement();">-</button>',
            '<button type="button" ng-click="$ctrl.increment();">+</button>',
          '</div>'
        ].join('')
    });

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document, ['app']);
});