angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

  .controller('MainCtrl', function($scope,$timeout) {
    $scope.$on('$ionicView.enter', function() {
      console.log($scope.questionIterator)
      $scope.nextQuestion();
    });
    $scope.isStartedGame = false;
    $scope.startGame = function(){
      $scope.isStartedGame = true;
    }

    $scope.questions = [
      {
        question : "What should the next play be?",
        answer1 : { answer: "Pass", percentage : "12.5%"},
        answer2 : { answer: "Run", percentage : "87.5%"},
        answer3 : { answer: "Other", percentage : " "}
      },
      {
        question : "Pass Play",
        answer1 : { answer: "Incomplete", percentage : "14.3%"},
        answer2 : { answer: "> 10 Yards", percentage : "28.6%"},
        answer3 : { answer: "< 10 Yards", percentage : "57.1%"},
      }
    ];

    $scope.questionIterator = 0;
    $scope.activeQuestion = $scope.questions[$scope.questionIterator];
    $scope.nextQuestion = function(){
      $scope.questionIterator = ($scope.questionIterator + 1) % $scope.questions.length;
      $scope.activeQuestion = $scope.questions[$scope.questionIterator];
    };

    $scope.recentPlays = [
      {
        type : "Pass",
        result : "Incomplete",
        color : "red"
      },
      {
        type : "Rush",
        result : "No Gain",
        color : "yellow"
      },
      {
        type : "Pass",
        result : "36 Yard Gain",
        color : "green"
      },
      {
        type : "Pass",
        result : "7 Yards Gain",
        color : "green"
      }
    ];


  })
  .controller('ResultCtrl', function($scope,$timeout) {
    $scope.$on('$ionicView.enter', function() {
      $timeout(function(){
        window.history.back();
      }, 2000);
    });
  })

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = null;
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
