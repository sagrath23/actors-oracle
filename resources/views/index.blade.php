<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="An app to find everything about any actor.">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
        <title>The Actor's Oracle</title>

        <!-- Add to homescreen for Chrome on Android -->
        <meta name="mobile-web-app-capable" content="yes">
        <link rel="icon" sizes="192x192" href="images/android-desktop.png">

        <!-- Add to homescreen for Safari on iOS -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="Material Design Lite">
        <link rel="apple-touch-icon-precomposed" href="images/ios-desktop.png">

        <!-- Tile icon for Win8 (144x144 + tile color) -->
        <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png">
        <meta name="msapplication-TileColor" content="#3372DF">

        <link rel="shortcut icon" href="images/favicon.png">

        <!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
        <!--
        <link rel="canonical" href="http://www.example.com/">
        -->

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
        <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-pink.min.css">
        <link rel="stylesheet" href="../styles/styles.css">
        <style>
            #view-source {
                position: fixed;
                display: block;
                right: 0;
                bottom: 0;
                margin-right: 40px;
                margin-bottom: 40px;
                z-index: 900;
            }
        </style>
    </head>
    <body class="mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base" ng-app="actorFinderApp" ng-cloak="">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" ng-controller="ActorFinderController">
            <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
                <div class="mdl-layout--large-screen-only mdl-layout__header-row">
                </div>
                <div class="mdl-layout--large-screen-only mdl-layout__header-row">
                    <h3>The Actor's Oracle <small>Find everything about any actor</small></h3>
                </div>
                <div class="mdl-layout--large-screen-only mdl-layout__header-row">
                </div>
            </header>
            <main class="mdl-layout__content">
                <div class="mdl-layout__tab-panel is-active" id="overview">
                    <!-- search panel -->
                    <section id="search-panel" class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                        <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone">
                            <!-- search term -->
                            <form action="#">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input" type="text" id="sample3" ng-model="searchTerm" ng-keyup="suggestActors()">
                                    <label class="mdl-textfield__label" for="sample3">Are you searching info for ...</label>
                                </div>
                            </form>
                            <!-- search results-->
                            <ul class="demo-list-icon mdl-list">
                                <li class="mdl-list__item selectable" ng-repeat="actor in suggestedActors track by $index" ng-click="showItem(actor)">
                                    <span class="mdl-list__item-primary-content">
                                        <i class="material-icons mdl-list__item-face" ng-if="actor.media_type === 'person'">face</i>
                                        <i class="material-icons mdl-list__item-movie" ng-if="actor.media_type === 'movie'">movie</i>
                                        <i class="material-icons mdl-list__item-tv" ng-if="actor.media_type === 'tv'">tv</i>
                                        <p ng-if="actor.media_type === 'person'"><% actor.name%></p>
                                        <p ng-if="actor.media_type === 'movie'"><% actor.title%></p>
                                        <p ng-if="actor.media_type === 'tv'"><% actor.name%></p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <!-- person detail-->
                    <section id="person-detail-panel" class="section--center content-grid mdl-grid mdl-shadow--2dp">
                        <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <figure class="mdl-card__media">
                                <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/<% selectedPerson.profile_path %>" alt="profile_photo" />
                            </figure>
                            <div class="mdl-card__title">
                                <h2 class="mdl-card__title-text"><% selectedPerson.name%></h2>
                            </div>
                        </div>
                        <div class="mdl-card mdl-cell mdl-cell--7-col mdl-cell--7-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <div class="mdl-card__supporting-text">
                                <ul class="mdl-list">
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Birthday:</strong> <% selectedPerson.birthday | date:'MMMM d, y'%>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Place of birth:</strong> <% selectedPerson.place_of_birth%>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Website:</strong> <% selectedPerson.homepage%>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mdl-card mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <div class="mdl-card__supporting-text">
                                <h4>Biography</h4>
                                <% selectedPerson.biography%>
                            </div>
                        </div>
                        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1" ng-click="goBack()">
                            <i class="material-icons">undo</i>
                        </button>
                    </section>
                    <!-- movie detail-->
                    <section id="movie-detail-panel" class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                        <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <figure class="mdl-card__media">
                                <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/<% selectedMovie.poster_path %>" alt="poster_photo" />
                            </figure>
                            <div class="mdl-card__title">
                                <h2 class="mdl-card__title-text"><% selectedMovie.title%> <small><% selectedMovie.tagline%></small></h2>
                            </div>
                        </div>
                        <div class="mdl-card mdl-cell mdl-cell--7-col mdl-cell--7-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <div class="mdl-card__supporting-text">
                                <ul class="mdl-list">
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Original title:</strong> <% selectedMovie.original_title %>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Release date:</strong> <% selectedMovie.release_date | date:'MMMM d, y'%>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Status:</strong> <% selectedMovie.status%>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Website:</strong> <% selectedMovie.homepage%>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mdl-card mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <div class="mdl-card__supporting-text">
                                <h4>Overview</h4>
                                <% selectedMovie.overview%>
                            </div>
                        </div>
                        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1" ng-click="goBack()">
                            <i class="material-icons">undo</i>
                        </button>
                    </section>
                    <!-- tv show detail-->
                    <section id="tv-detail-panel" class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                        <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <figure class="mdl-card__media">
                                <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/<% selectedTv.poster_path %>" alt="poster_photo" />
                            </figure>
                            <div class="mdl-card__title">
                                <h2 class="mdl-card__title-text"><% selectedTv.name%></h2>
                            </div>
                        </div>
                        <div class="mdl-card mdl-cell mdl-cell--7-col mdl-cell--7-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <div class="mdl-card__supporting-text">
                                <ul class="mdl-list">
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Original name:</strong> <% selectedTv.original_name %>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Status:</strong> <% selectedTv.status%>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Last air date:</strong> <% selectedTv.last_air_date | date:'MMMM d, y'%>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Seasons:</strong> <% selectedTv.number_of_seasons%>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Episodes:</strong> <% selectedTv.number_of_episodes%>
                                        </span>
                                    </li>
                                    <li class="mdl-list__item">
                                        <span class="mdl-list__item-primary-content">
                                            <strong>Website:</strong> <% selectedTv.homepage%>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mdl-card mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-shadow--3dp">
                            <div class="mdl-card__supporting-text">
                                <h4>Overview</h4>
                                <% selectedTv.overview%>
                            </div>
                        </div>
                        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1" ng-click="goBack()">
                            <i class="material-icons">undo</i>
                        </button>
                    </section>
                </div>
                <footer class="mdl-mega-footer">
                    <div class="mdl-mega-footer--bottom-section">
                        <div class="mdl-logo">
                            Proudly powered by Steven Villegas
                        </div>
                    </div>
                </footer>
            </main>
        </div>
        <script src="https://code.getmdl.io/1.1.3/material.min.js"></script>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="../js/angularjs/angular.min.js"></script>
        <script type="text/javascript" src="../js/angularjs/i18n/angular-locale_en-us.js"></script>
        <script type="text/javascript" src="../js/angularjs/angular-resource.min.js"></script>
        <script type="text/javascript" src="../js/custom/modules/actorFinderModule.js"></script>
        <script type="text/javascript" src="../js/custom/controllers/actorFinderController.js"></script>
    </body>
</html>