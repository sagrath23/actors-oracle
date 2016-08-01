"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ActorService = (function () {
    function ActorService(http) {
        this.http = http;
        this.actorsUrl = 'app/actors'; // URL to web api
    }
    ActorService.prototype.getActors = function () {
        return this.http.get(this.actorsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ActorService.prototype.getActor = function (id) {
        return this.getActors()
            .then(function (actors) { return actors.find(function (actor) { return actor.id === id; }); });
    };
    ActorService.prototype.save = function (actor) {
        if (actor.id) {
            return this.put(actor);
        }
        return this.post(actor);
    };
    ActorService.prototype.delete = function (actor) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.actorsUrl + "/" + actor.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    // Add new Hero
    ActorService.prototype.post = function (actor) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.actorsUrl, JSON.stringify(actor), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Hero
    ActorService.prototype.put = function (actor) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.actorsUrl + "/" + actor.id;
        return this.http
            .put(url, JSON.stringify(actor), { headers: headers })
            .toPromise()
            .then(function () { return actor; })
            .catch(this.handleError);
    };
    ActorService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ActorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ActorService);
    return ActorService;
}());
exports.ActorService = ActorService;
//# sourceMappingURL=actor.service.js.map