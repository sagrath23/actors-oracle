/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('actorFinderApp', ['ngResource'], 
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    }).factory('Resource', ['$resource',
            function ($resource) {
                return {
                    actors: $resource('api/actor/:id', {id: '@id'}),
                    movies: $resource('api/movie/:id', {id: '@id'}),
                    tvShow: $resource('api/tv/:id', {id: '@id'}),
                    search: $resource('api/search', {}, {find: {method: 'POST', params: {data: 0}}})
                };
            }])
        //do another factory to sync data through all controllers

