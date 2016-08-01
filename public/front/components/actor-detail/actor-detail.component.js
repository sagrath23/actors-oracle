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
var router_1 = require('@angular/router');
var actor_1 = require('./../../classes/actor');
var actor_service_1 = require('./../../services/actor/actor.service');
var ActorDetailComponent = (function () {
    function ActorDetailComponent(actorService, route) {
        this.actorService = actorService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    ActorDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.actorService.getActor(id)
                    .then(function (actor) { return _this.actor = actor; });
            }
            else {
                _this.navigated = false;
                _this.actor = new actor_1.Actor();
            }
        });
    };
    ActorDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ActorDetailComponent.prototype.save = function () {
        var _this = this;
        this.actorService.save(this.actor).then(function (actor) {
            _this.actor = actor; // saved hero, w/ id if new
            _this.goBack(actor);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    ActorDetailComponent.prototype.goBack = function (savedActor) {
        if (savedActor === void 0) { savedActor = null; }
        this.close.emit(savedActor);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', actor_1.Actor)
    ], ActorDetailComponent.prototype, "actor", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ActorDetailComponent.prototype, "close", void 0);
    ActorDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-actor-detail',
            templateUrl: 'actor-detail.component.html',
            styleUrls: ['actor-detail.component.css']
        }), 
        __metadata('design:paramtypes', [actor_service_1.ActorService, router_1.ActivatedRoute])
    ], ActorDetailComponent);
    return ActorDetailComponent;
}());
exports.ActorDetailComponent = ActorDetailComponent;
//# sourceMappingURL=actor-detail.component.js.map