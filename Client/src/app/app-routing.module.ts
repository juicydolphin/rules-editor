// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {LoginComponent} from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {LogoutComponent} from "./logout/logout.component";
import {MathRulesComponent} from "./math-rules/math-rules.component";
import {TextRulesComponent} from "./text-rules/text-rules.component";
import {DateRulesComponent} from "./date-rules/date-rules.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'math-rules', component: MathRulesComponent},
  { path: 'text-rules', component: TextRulesComponent},
  { path: 'date-rules', component: DateRulesComponent},
  {path: '**', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
