import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  constructor(public auth: AuthService,
              private changeDetector: ChangeDetectorRef) { }


  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
