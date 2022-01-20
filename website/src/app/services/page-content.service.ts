import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageContent } from './page-content';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {

  constructor(private httpClient: HttpClient) { }

  private _references!: ReplaySubject<PageContent>;

  getPageContent(): Observable<PageContent> {
    if (!this._references) {
      this._references = new ReplaySubject<PageContent>(1)
      this.getEndpointUrl().pipe(
        mergeMap(url => this.getContent(url))
      ).subscribe(content => this._references.next(content))
    }
    return this._references;
  }


  private getEndpointUrl(): Observable<string> {
    return this.httpClient.get<Config>(
      `${environment.configBaseUrl}config.json`
    ).pipe(map(config => config.endpoint))
  }

  private getContent(url: string): Observable<PageContent> {
    return this.httpClient.get<PageContent>(url).pipe(
      map(content => {
        content.profiles = content.profiles.map((profile, index) => ({...profile, id: index}))
        return content
      })
    )
  }
}

interface Config {
  endpoint: string;
}
