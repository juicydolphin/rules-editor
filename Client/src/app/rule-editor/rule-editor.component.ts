import { Component, OnInit } from '@angular/core';
import { RuleService } from '../services/rule.service';
import { Rule } from '../shared/models/rule.model';

@Component({
  selector: 'app-rule-editor',
  templateUrl: './rule-editor.component.html',
  styleUrls: ['./rule-editor.component.css']
})
export class RuleEditorComponent implements OnInit {

  public rules: Rule[] = [];

  constructor(private ruleService: RuleService) { }

  ngOnInit() {
    this.ruleService.getRules().subscribe((rules: Rule[]) => {
      this.rules = rules;
    });
  }

  addRule() {
    const rule = new Rule();
    rule.name = 'New Rule';
    this.ruleService.addRule(rule).subscribe((newRule: Rule) => {
      this.rules.push(newRule);
    });
  }

  deleteRule(rule: Rule) {
    this.ruleService.deleteRule(rule.id).subscribe(() => {
      this.rules = this.rules.filter(r => r.id !== rule.id);
    });
  }

  saveRule(rule: Rule) {
    this.ruleService.updateRule(rule).subscribe();
  }

}
