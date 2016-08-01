import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actor }           from './../../classes/actor';
@Injectable()
export class ActorSearchService {
  constructor(private http: Http) {}
  search(term: string) {
    return this.http
               .get(`app/actors/?name=${term}+`)
               .map((r: Response) => r.json().data as Actor[]);
  }
}