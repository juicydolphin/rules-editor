// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// @Component({
//   selector: 'app-rule-form',
//   template: `
//     <form (ngSubmit)="onSubmit()">
//       <div>
//         <label for="ruleType">Rule Type:</label>
//         <select name="ruleType" [(ngModel)]="ruleType" required>
//           <option value="addition">Addition</option>
//           <option value="subtraction">Subtraction</option>
//           <option value="multiplication">Multiplication</option>
//           <option value="division">Division</option>
//           <option value="max">Max</option>
//         </select>
//       </div>
//       <div>
//         <label for="ruleExpression">Rule Expression:</label>
//         <input type="text" name="ruleExpression" [(ngModel)]="ruleExpression" required>
//       </div>
//       <div *ngIf="ruleType === 'addition' || ruleType === 'subtraction' || ruleType === 'multiplication' || ruleType === 'division'">
//         <label for="number1">Number 1:</label>
//         <input type="number" name="number1" [(ngModel)]="number1" required>
//       </div>
//       <div *ngIf="ruleType === 'addition' || ruleType === 'subtraction' || ruleType === 'multiplication' || ruleType === 'division'">
//         <label for="number2">Number 2:</label>
//         <input type="number" name="number2" [(ngModel)]="number2" required>
//       </div>
//       <div *ngIf="ruleType === 'max'">
//         <label for="numbers">Numbers (comma separated):</label>
//         <input type="text" name="numbers" [(ngModel)]="numbers" required>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//
//     <div *ngIf="result">
//       <label for="result">Result:</label>
//       <input type="text" name="result" [(ngModel)]="result" disabled>
//     </div>
//   `,
// })
// export class RuleFormComponent {
//   ruleType: string = '';
//   ruleExpression: string = '';
//   number1: number = 0;
//   number2: number = 0;
//   numbers: string = '';
//   result: any;
//
//   constructor(private http: HttpClient) {}
//
//   onSubmit() {
//     let ruleData;
//     switch (this.ruleType) {
//       case 'addition':
//       case 'subtraction':
//       case 'multiplication':
//       case 'division':
//         ruleData = {
//           ruleType: this.ruleType,
//           ruleExpression: this.ruleExpression,
//           number1: this.number1,
//           number2: this.number2,
//         };
//         break;
//       case 'max':
//         ruleData = {
//           ruleType: this.ruleType,
//           ruleExpression: this.ruleExpression,
//           numbers: this.numbers.split(',').map(Number),
//         };
//         break;
//     }
//     this.http.post('/api/MathRules/' + this.ruleType, ruleData).subscribe((data: any) => {
//       this.result = data;
//     });
//   }
// }
