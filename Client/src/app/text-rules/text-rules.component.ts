import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-text-rules',
  templateUrl: './text-rules.component.html',
})
export class TextRulesComponent implements OnInit {
  ruleType = 'substring';
  originalString = '';
  startIndex = 0;
  length = 0;
  formatString = '';
  arguments = '';
  oldValue = '';
  newValue = '';
  result: any = null;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.auth.loggedIn) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    let ruleData;

    switch (this.ruleType) {
      case 'substring':
        ruleData = {
          originalString: this.originalString,
          startIndex: this.startIndex,
          length: this.length,
        };
        break;
      case 'tolower':
        ruleData = {
          originalString: this.originalString,
        };
        break;
      case 'toupper':
        ruleData = {
          originalString: this.originalString,
        };
        break;
      case 'replace':
        ruleData = {
          originalString: this.originalString,
          oldValue: this.oldValue,
          newValue: this.newValue,
        };
        break;
    }

    this.http.post(`/api/textrules/${this.ruleType}`, ruleData, {responseType: 'text'}).subscribe((response: any) => {
      this.result = response;
      if (!this.auth.loggedIn) {

      }

    });
  }
}
