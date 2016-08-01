import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor }        from './../../classes/actor';
import { ActorService } from './../../services/actor/actor.service';
@Component({
  selector: 'my-actor-detail',
  templateUrl: 'actor-detail.component.html',
  styleUrls: ['actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit, OnDestroy {
  @Input() actor: Actor;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  
  constructor(
    private actorService: ActorService,
    private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.actorService.getActor(id)
            .then(actor => this.actor = actor);
      } else {
        this.navigated = false;
        this.actor = new Actor();
      }
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  save() {
    this.actorService.save(this.actor).then(actor => {
          this.actor = actor; // saved hero, w/ id if new
          this.goBack(actor);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  
  goBack(savedActor: Actor = null) {
    this.close.emit(savedActor);
    if (this.navigated) { window.history.back(); }
  }
}