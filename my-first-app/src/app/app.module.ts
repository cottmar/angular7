import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// this is a needed for Typescript
import { FormsModule } from '@angular/forms'; 
// import { HttpModule } from '@angular/http';
import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
