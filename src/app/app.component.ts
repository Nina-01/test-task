import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
  isSubmitted: boolean = false;
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  input5: string = '';

  onNextClick(event: any): void {
    this.isSubmitted = true;
  }
}
