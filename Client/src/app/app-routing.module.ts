// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {LoginComponent} from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {LogoutComponent} from "./logout/logout.component";
import {MainComponent} from "./main/main.component";
import {RuleEditorComponent} from "./rule-editor/rule-editor.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'rules-editor', component: RuleEditorComponent },
  {path: '**', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
