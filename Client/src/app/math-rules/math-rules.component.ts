import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-math-rules',
  templateUrl: './math-rules.component.html',
  styleUrls: ['./math-rules.component.css']
})
export class MathRulesComponent implements OnInit {
  ruleType = 'addition';
  number1 = 0;
  number2 = 0;
  numbers = '';
  number = 0;
  decimals = 0;
  result: any = null;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.auth.loggedIn) {
      this.router.navigate(['/login']);
    }
  }

  submit() {
    let ruleData;
    switch (this.ruleType) {
      case 'addition':
      case 'subtraction':
      case 'multiplication':
      case 'division':
        ruleData = {
          ruleType: this.ruleType,
          number1: this.number1,
          number2: this.number2,
        };
        break;
      case 'max':
      case 'min':
        ruleData = {
          ruleType: this.ruleType,
          numbers: this.numbers.split(',').map(Number),
        };
        break;
    }
    this.http.post(`/api/mathrules/${this.ruleType}`, ruleData).subscribe((response: any) => {
      this.result = response;
    });
  }
}
