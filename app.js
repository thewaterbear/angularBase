angular
	.module('Todo', [])
	.controller('CountCtrl', function CountCtrl($scope, $interval, $sce, $timeout) {
    console.log("dsdsdd");
	  $scope.count = 4;
    $scope.displayHtml = "";
    $scope.textToSay="hey i'm a test setence";
    $scope.buffer = [];
    
    //build an array of words
    // $scope.buffer = "";

    $scope.wordCount = 0;
    // setInterval(function(){ textUpdate() }, 1000);

  //   $scope.$watch(angular.bind($scope, function () {
  //   return $scope.title; // `$scope` IS the `$scope` above!!
  // }), function (newVal, oldVal) {
  //   // now we will pickup changes to newVal and oldVal
  // });
    $scope.textUpdate = function() {
      //check if last character was space
      $scope.buffer = $scope.textToSay.split(" ");
      console.log("buffer", $scope.buffer);
      // console.log("last",buffer[buffer.length-1]);

      // var lastChar = textToSay.substr(textToSay.length - 1);
      // if(lastChar == " ") {
      //   console.log("spppaceee");
      //   $scope.displayHtml += " "+buffer.pop();
      // }
        // if (buffer.length > $scope.wordCount) {
      // $timeout(function() {poll(param1, param2)}, polling_interval); 
        // }
      for (var i = 0; i < $scope.buffer.length; i++) {
          // $timeout(function() {console.log(i);

          //   doThing(i);
          // }, 300*(i+1)); 
          doDelayedThing(i);

        // $timeout(function(i){
        //   // $scope.val = true
        //   console.log($scope.buffer[i]);
        //   $scope.displayHtml += "<span>" + $scope.buffer[i]+" <span>";
        //   console.log('fff');
        //   $scope.displayHtmlSafe = $sce.trustAsHtml($scope.displayHtml);
        // }, 500*(i+1));  
        
      }


      function doDelayedThing(i) {
        return $timeout(function(){ //Return promise if needed
           //Access params here from the outer closure of the function.
          // console.log(i+"dela");
          // $scope.displayHtml += "<span>" + $scope.buffer[i]+" </span>";

          $( ".bubble" ).append( "<span>" + $scope.buffer[i]+" </span>" );
          // $scope.displayHtmlSafe = $sce.trustAsHtml($scope.displayHtml);
         }, 260*(i+1)); 
      }

      // function doThing(idx) {
      //     console.log("hey"+idx);
      //     console.log("dddddd", $scope.buffer);
      //     console.log($scope.buffer[idx*1]);
         
      // }


      // $scope.displayHtmlSafe = $sce.trustAsHtml($scope.displayHtml);

      $scope.wordCount = $scope.buffer.length;
    }

    // $interval(this.textUpdate, 1000);
    // textUpdate();

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
	angular.bootstrap(document, ['Todo']);
});