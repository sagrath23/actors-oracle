<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('index',['index'=>true]);//$app->version();
});

$app->get('api/actor/{id}', 'TMDBController@getActor');

$app->get('api/movie/{id}', 'TMDBController@getMovie');

$app->get('api/tv/{id}', 'TMDBController@getTvShow');

$app->post('api/search', 'TMDBController@suggestContents');
//$app->post('api/search', ['middleware' => 'csrf','TMDBController@suggestContents']);