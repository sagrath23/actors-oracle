import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Actor } from './../../classes/actor';
import { ActorService } from './../../services/actor/actor.service';
import { ActorSearchComponent } from './../../components/actor-search/actor-search.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [ActorSearchComponent]
  /*template: '<h3>My Dashboard</h3>'*/
})
export class DashboardComponent implements OnInit {
  actors: Actor[] = [];
  
  constructor(
    private router: Router,
    private actorService: ActorService) {
  }
  ngOnInit() {
    this.actorService.getActors()
      .then(actors => this.actors = actors.slice(1, 5));
  }
  gotoDetail(actor: Actor) {
      let link = ['/detail', actor.id];
      this.router.navigate(link);
  }
}

