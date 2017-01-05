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

    $scope.messages = [
      "Hey Assistant how is the weather?",
      // "The Weather is great",
      // "What else?",
      // "How does this text look to you?",
    ]

    $scope.wordCount = 0;

    $scope.StartConvo = function() {

      angular.forEach($scope.messages, function(msg, key) {
        console.log("hsfsfsf"+msg+key);
        var sentenceBufferArray = msg.split(" ");

        for (var i = 0; i < sentenceBufferArray.length; i++) {
            AnimateInSentence(i,sentenceBufferArray);
        }

   

        $scope.wordCount = sentenceBufferArray.length;

      });
    }




    function AnimateInSentence(i,sentenceBufferArray) {
      console.log('go1');
      return $timeout(function(){ //Return promise if needed
        $( ".bubble" ).append( "<span>" + sentenceBufferArray[i]+" </span>" );
        console.log('go');
       }, 260*(i+1)); 
    }

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