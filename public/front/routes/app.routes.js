"use strict";
var router_1 = require('@angular/router');
var actors_component_1 = require('./../components/actors/actors.component');
var dashboard_component_1 = require('./../components/dashboard/dashboard.component');
var actor_detail_component_1 = require('./../components/actor-detail/actor-detail.component');
var routes = [
    {
        path: 'actors',
        component: actors_component_1.ActorsComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: actor_detail_component_1.ActorDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map