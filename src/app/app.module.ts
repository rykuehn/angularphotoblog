import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryService, EntryComponent } from './entries';
import { InMemoryEntryService } from './backend';

@NgModule({
  imports: [BrowserModule, 
            HttpModule, 
            InMemoryWebApiModule.forRoot(InMemoryEntryService)],
  declarations: [AppComponent, EntryComponent, EntryListComponent],
  bootstrap: [AppComponent],
  providers: [ EntryService ],
})
export class AppModule {

}