import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rule } from '../shared/models/rule.model';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {

  @Input() public rule: Rule | undefined;
  @Output() public delete: EventEmitter<Rule> = new EventEmitter<Rule>();
  @Output() public save: EventEmitter<Rule> = new EventEmitter<Rule>();

  constructor() { }

  ngOnInit() {
  }

  deleteRule() {
    this.delete.emit(this.rule);
  }

  saveRule() {
    this.save.emit(this.rule);
  }

}
