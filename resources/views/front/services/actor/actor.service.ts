import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Actor } from './../../classes/actor';
@Injectable()
export class ActorService {
  private actorsUrl = 'app/actors';  // URL to web api
  constructor(private http: Http) { }
  
  getActors() {
    return this.http.get(this.actorsUrl)
               .toPromise()
               .then(response => response.json().data as Actor[])
               .catch(this.handleError);
  }
  
  getActor(id: number) {
    return this.getActors()
               .then(actors => actors.find(actor => actor.id === id));
  }
  
  save(actor: Actor): Promise<Actor>  {
    if (actor.id) {
      return this.put(actor);
    }
    return this.post(actor);
  }
  
  delete(actor: Actor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.actorsUrl}/${actor.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }
  // Add new Hero
  private post(actor: Actor): Promise<Actor> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.actorsUrl, JSON.stringify(actor), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }
  // Update existing Hero
  private put(actor: Actor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.actorsUrl}/${actor.id}`;
    return this.http
               .put(url, JSON.stringify(actor), {headers: headers})
               .toPromise()
               .then(() => actor)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}