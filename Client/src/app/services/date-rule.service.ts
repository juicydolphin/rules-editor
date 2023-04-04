import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DateRule, DateComparisonRule, IntRule } from '../shared/models/date-rule.model';

@Injectable({
  providedIn: 'root'
})
export class DateRulesService {

  constructor(private http: HttpClient) { }

  addDays(dateRule: DateRule): Observable<any> {
    return this.http.post('/api/DateRules/AddDays', dateRule,{responseType: 'text'});
  }

  compareDates(dateComparisonRule: DateComparisonRule): Observable<any> {
    return this.http.post('/api/DateRules/CompareDates', dateComparisonRule,{responseType: 'text'});
  }

  daysBetweenDates(dateComparisonRule: DateComparisonRule): Observable<any> {
    return this.http.post('/api/DateRules/DaysBetweenDates', dateComparisonRule,{responseType: 'text'});
  }

  isLeapYear(intRule: IntRule): Observable<any> {
    return this.http.post('/api/DateRules/IsLeapYear', intRule,{responseType: 'text'});
  }

  getWeekday(dateRule: DateRule): Observable<any> {
    return this.http.post('/api/DateRules/GetWeekday', dateRule,{responseType: 'text'});
  }

}
