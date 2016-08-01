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
var actor_service_1 = require('./../../services/actor/actor.service');
var actor_detail_component_1 = require('./../../components/actor-detail/actor-detail.component');
var ActorsComponent = (function () {
    function ActorsComponent(router, actorService) {
        this.router = router;
        this.actorService = actorService;
        this.addingActor = false;
    }
    ActorsComponent.prototype.getActors = function () {
        var _this = this;
        this.actorService.getActors().then(function (actors) { return _this.actors = actors; })
            .catch(function (error) { return _this.error = error; });
    };
    ActorsComponent.prototype.addActor = function () {
        this.addingActor = true;
        this.selectedActor = null;
    };
    ActorsComponent.prototype.close = function (savedActor) {
        this.addingActor = false;
        if (savedActor) {
            this.getActors();
        }
    };
    ActorsComponent.prototype.deleteActor = function (actor, event) {
        var _this = this;
        event.stopPropagation();
        this.actorService.delete(actor)
            .then(function (res) {
            _this.actors = _this.actors.filter(function (h) { return h !== actor; });
            if (_this.selectedActor === actor) {
                _this.selectedActor = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    ActorsComponent.prototype.ngOnInit = function () {
        this.getActors();
    };
    ActorsComponent.prototype.onSelect = function (actor) {
        this.selectedActor = actor;
        this.addingActor = false;
    };
    ActorsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedActor.id]);
    };
    ActorsComponent = __decorate([
        core_1.Component({
            selector: 'my-actors',
            templateUrl: 'actors.component.html',
            styleUrls: ['actors.component.css'],
            directives: [actor_detail_component_1.ActorDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, actor_service_1.ActorService])
    ], ActorsComponent);
    return ActorsComponent;
}());
exports.ActorsComponent = ActorsComponent;
//# sourceMappingURL=actors.component.js.map