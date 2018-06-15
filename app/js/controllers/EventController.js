'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color:red">Hi There</span>';
        $scope.boolValue = true;
        $scope.myStyle = {color: 'red'};
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';
        $scope.event = {
            name : "Anguler app",
            date : "06-14-2018",
            time : '10:30 AM',
            location : {
                address: 'North moon',
                city: 'First moon city',
                province: 'MN'
            },
            imageUrl: './img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    createrName: 'BOb Smith',
                    duration: '1 Hr',
                    level: 'introductory',
                    abstract: 'In this session we will learn *****',
                    upVoteCount: 0
                },
                {
                    name: 'Scope for fun and profit',
                    createrName: 'BOb Smith',
                    duration: '1 Hr',
                    level: 'Advanced',
                    abstract: 'In this session we will learn *****',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    createrName: 'BOb Smith',
                    duration: '1 Hr',
                    level: 'Advanced',
                    abstract: 'In this session we will learn *****',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

    }
    
);