import {Component, OnInit} from '@angular/core';
import {DateRule, DateComparisonRule, IntRule} from '../shared/models/date-rule.model';
import {DateRulesService} from '../services/date-rule.service';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-date-rules',
  templateUrl: './date-rules.component.html',
  styleUrls: ['./date-rules.component.css']
})
export class DateRulesComponent implements OnInit{

  dateRule: DateRule = {Date: "", Days: 0};
  dateComparisonRule: DateComparisonRule = {Date1: "", Date2: ""};
  intRule: IntRule = {Value: 2021};

  ruleType = 'addDays';
  result: any;

  constructor(private dateRulesService: DateRulesService, private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.auth.loggedIn) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    switch (this.ruleType) {
      case 'addDays':
        this.dateRulesService.addDays(this.dateRule).subscribe(result => {
          this.result = result;
        }, error => {
          console.log(error);
        });
        break;
      case 'compareDates':
        this.dateRulesService.compareDates(this.dateComparisonRule).subscribe(result => {
          this.result = result;
        }, error => {
          console.log(error);
        });
        break;
      case 'daysBetweenDates':
        this.dateRulesService.daysBetweenDates(this.dateComparisonRule).subscribe(result => {
          this.result = result;
        }, error => {
          console.log(error);
        });
        break;
      case 'isLeapYear':
        this.dateRulesService.isLeapYear(this.intRule).subscribe(result => {
          this.result = result;
        }, error => {
          console.log(error);
        });
        break;
      case 'getWeekDay':
        this.dateRulesService.getWeekday(this.dateRule).subscribe(result => {
          this.result = result;
        }, error => {
          console.log(error);
        });
        break;
    }
  }
}
