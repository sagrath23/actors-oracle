/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('actorFinderApp', ['ngResource'])
        .constant("CSRF_TOKEN", '{{ csrf_token() }}')
        .factory('Resource', ['$resource',
            function ($resource) {
                console.log(CSRF_TOKEN);
                return {
                    actors: $resource('api/actor/:id.:format', {id: '@id', format: '@format'}),
                    movies: $resource('api/movie/:id.:format', {id: '@id', format: '@format'}),
                    tvShow: $resource('api/tv/:id.:format', {id: '@id', format: '@format'}),
                    search: $resource('api/search.:format', {format: '@format'}, {find: {method: 'POST', params: {data: 0, format: 'json'}}})
                };
            }])
        //do another factory to sync data through all controllers

