import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ActorSearchService } from './../../services/actor-search/actor-search.service';
import { Actor } from './../../classes/actor';
@Component({
  selector: 'actor-search',
  templateUrl: 'actor-search.component.html',
  providers: [ActorSearchService]
})
export class ActorSearchComponent implements OnInit {
  actors: Observable<Actor[]>;
  searchSubject = new Subject<string>();
  constructor(private actorSearchService: ActorSearchService,private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string) { this.searchSubject.next(term); }
  
  ngOnInit() {
    this.actors = this.searchSubject
      .asObservable()           // cast as Observable
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.actorSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Actor[]>([]))
      .catch(error => {
        // Todo: real error handling
        console.log(error);
        return Observable.of<Actor[]>([]);
      });
  }
  
  gotoDetail(actor: Actor) {
    let link = ['/detail', actor.id];
    this.router.navigate(link);
  }
}