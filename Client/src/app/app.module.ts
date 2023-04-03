// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// Services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
// Components
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {LogoutComponent} from "./logout/logout.component";
import {RuleEditorComponent} from "./rule-editor/rule-editor.component";
import {RuleComponent} from "./rule/rule.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RuleEditorComponent,
    RuleComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string | null => localStorage.getItem('token'),
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
