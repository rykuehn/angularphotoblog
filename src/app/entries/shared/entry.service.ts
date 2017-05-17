import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Entry } from './entry.model';

@Injectable()

export class EntryService {
  constructor(private http: Http){

  }

  addComment(entryId: number, comment: {name: string; comment: string;}){
    this.http.post(`/app/enties/${entryId}/comments`, comment)
        .toPromise();

  }
  getEntries(): Promise<Entry[]>{
    return this.http.get('/app/entries')
               .toPromise()
               .then(response => response.json().data as Entry[]);
  } 
}