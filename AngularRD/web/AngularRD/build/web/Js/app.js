/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var loginApp=angular.module('loginApp',[]);

loginApp.controller('loginCtrl',function($scope,$http,$window){
    console.log('login controller');
    $scope.obj={};
    var LOGINURL="Js/login.json";
   $scope.loginsubmit=function ()
   {
    $http.post(LOGINURL,{mbno:$scope.obj.mbno,pass:$scope.obj.pass}).success(function(data,status){
            for(var i=0;i<data.length;i++)
            {
        if(data[i].role=="admin")
        {
            $window.location.href="audioByte.html";
        }
        else
        {
             $window.location.href="onlineAudio.html";
        }
            }
    })
    .error(function(data){
        
    });
   };
})