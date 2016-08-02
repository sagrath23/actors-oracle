/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('actorFinderApp').controller('ActorFinderController', ['$scope', 'Resource', '$filter',
    function ($scope, Resource, $filter) {
        $scope.suggestActors = function(){
            console.log('searching for '+$scope.searchTerm);
            Resource.search.find({data: $scope.searchTerm}, 
                function (data) {
                    console.log('sucess');
                    console.log(data);
                    $scope.suggestedActors = data.results;
                    console.log($scope.suggestedActors);
                }, 
                function (data) {
                    console.log('fail');
                    console.log(data);
                });
        };
        
        $scope.showItem = function(item){
            console.log('show item');
            switch(item.media_type){
                case 'person':{
                    Resource.actors.get({id: item.id},
                        function(data){
                            console.log(data);
                            $scope.selectedPerson = data;
                            //hide search panel
                            $('#search-panel').hide('slow');
                            $('#person-detail-panel').show('slow');
                            $('#person-detail-panel').css({'display': 'flex'});
                        },
                        function(data){
                            console.log('something bad happened');
                            console.log(data);
                        });
                }break;
                case 'movie':{
                    Resource.movies.get({id: item.id},
                        function(data){
                            console.log(data);
                            $scope.selectedMovie = data;
                            //hide search panel
                            $('#search-panel').hide('slow');
                            $('#movie-detail-panel').show('slow');
                            $('#movie-detail-panel').css({'display': 'flex'});
                        },
                        function(data){
                            console.log('something bad happened');
                            console.log(data);
                        });    
                }break;
                case 'tv':{
                    Resource.tvShow.get({id: item.id},
                        function(data){
                            console.log(data);
                            $scope.selectedTv = data;
                            //hide search panel
                            $('#search-panel').hide('slow');
                            $('#tv-detail-panel').show('slow');
                            $('#tv-detail-panel').css({'display': 'flex'});
                        },
                        function(data){
                            console.log('something bad happened');
                            console.log(data);
                        });    
                }break;
            }
            //animate transition
        };
        
        $scope.goBack = function(){
            console.log('return to new search');
            $scope.searchTerm = null;
            $scope.suggestedActors = [];
            $('#person-detail-panel').hide('slow');
            $('#movie-detail-panel').hide('slow');
            $('#tv-detail-panel').hide('slow');
            $('#search-panel').show('slow');        
        };
    }]);
