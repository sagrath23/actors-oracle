/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('actorFinderApp').controller('ActorFinderController', ['$scope', 'Resource', '$filter',
    function ($scope, Resource, $filter) {
        $scope.init = function(){
            console.log('Controller loaded succesfully!!!');
            Resource.actors.get({id: 1, format: 'json'}, 
                function (data) {
                    console.log(data);
                }, 
                function (data) {
                    console.log(data);
                });
        };
        
        $scope.init();
    }]);
