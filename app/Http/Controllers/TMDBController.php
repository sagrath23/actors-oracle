<?php

namespace App\Http\Controllers;

use App\User;

class TMDBController extends Controller
{
    #@var string url of API TMDB
    const _API_URL_ = "http://api.themoviedb.org/3/";

    #@var string Version of this class
    const VERSION = '0.0.2.1';
    //debug mode
    private $_debug = false;
    //tmdb API Key
    private $apikey = '27a5c62118c2f9e8ee200f2bdd5269f8';
    //query language
    private $lang = 'en';
    
    public function initialize(array $config) {
        //auth into tmdb API
        $this->callAPI('configuration', '');        
    }
    
    public function getActor($idPerson){
        return $this->callAPI('person/'.$idPerson, 'append_to_response=tv_credits,movie_credits');
    }
    
    public function getMovie($idMovie){
        return $this->callAPI('movie/'.$idMovie, 'append_to_response=casts');
    }
    
    public function getTvShow($idTv){
        return $this->callAPI('tv/'.$idTv, 'append_to_response=credits');
    }
    
    public function suggestContents(Request $request){
        print_r($request);
        exit;
        //return $this->callAPI('search/multi', 'query='.$request->input('queryText'));
    }
    
    /**
     * 	Makes the call to the API and retrieves the data as a JSON
     *
     * 	@param string $action	API specific function name for in the URL
     * 	@param string $appendToResponse	The extra append of the request
     * 	@return string
     */
    private function callAPI($action, $appendToResponse = null) {

        $url = self::_API_URL_ . $action . '?api_key=' . $this->apikey . '&language=' . $this->lang ;
        if($appendToResponse != null){
            $url.= '&' . $appendToResponse;
        }
        if ($this->_debug) {
            echo '<pre><a href="' . $url . '">check request</a></pre>';
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FAILONERROR, 1);

        $results = curl_exec($ch);

        curl_close($ch);
        
        //print_r($results);
        //$testVar = (array) json_decode(($results), true);
        //$testVar['url_query'] = $url;
        //return (array) json_decode(($results), true);
        return $results;
    }
}
