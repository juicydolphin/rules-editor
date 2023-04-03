export class Rule {
  id?: number;
  name?: string;
  type?: RuleType;
  expression?: string;
}

export enum RuleType {
  Math = "Math",
  Text = "Text",
  DateTime = "DateTime"
}
