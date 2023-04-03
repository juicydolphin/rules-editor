import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rule } from '../shared/models/rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  private apiUrl = 'api/rules';

  constructor(private http: HttpClient) { }

  public getRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>(this.apiUrl);
  }

  public addRule(rule: Rule): Observable<Rule> {
    return this.http.post<Rule>(this.apiUrl, rule);
  }

  public updateRule(rule: Rule): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${rule.id}`, rule);
  }

  public deleteRule(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
