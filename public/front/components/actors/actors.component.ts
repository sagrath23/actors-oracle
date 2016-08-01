import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Actor }                from './../../classes/actor';
import { ActorService }         from './../../services/actor/actor.service';
import { ActorDetailComponent } from './../../components/actor-detail/actor-detail.component';
@Component({
  selector: 'my-actors',
  templateUrl: 'actors.component.html',
  styleUrls:  ['actors.component.css'],
  directives: [ActorDetailComponent]
})
export class ActorsComponent implements OnInit {
  actors: Actor[];
  selectedActor: Actor;
  addingActor = false;
  error: any;
  constructor(private router: Router,private actorService: ActorService) { }
  
  getActors() {
    this.actorService.getActors().then(actors => this.actors = actors)
        .catch(error => this.error = error);
  }
  
  addActor() {
    this.addingActor = true;
    this.selectedActor = null;
  }
  
  close(savedActor: Actor) {
    this.addingActor = false;
    if (savedActor) { this.getActors(); }
  }
  
  deleteActor(actor: Actor, event: any) {
    event.stopPropagation();
    this.actorService.delete(actor)
        .then(res => {
            this.actors = this.actors.filter(h => h !== actor);
            if (this.selectedActor === actor) { this.selectedActor = null; }
        })
        .catch(error => this.error = error);
  }
  
  ngOnInit() {
    this.getActors();
  }
  
  onSelect(actor: Actor) {
    this.selectedActor = actor;
    this.addingActor = false;
  }
  
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedActor.id]);
  }
}