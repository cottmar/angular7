import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Cara';
}


// selector - holds app - root. this is information angular needed to be able to replace the information with the information
// angular is triggered to run in the final index.html, getting served by the browser. 
// when ngserve rebuilds, it will create JS bundles and automatically update for us
// the script files contain our own code
// the first files that are executed are in the main.ts
