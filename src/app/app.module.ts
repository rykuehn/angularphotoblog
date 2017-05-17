import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryService, EntryComponent, EntryCommentFormComponent } from './entries';
import { InMemoryEntryService } from './backend';

@NgModule({
  imports: [BrowserModule, 
            HttpModule, 
            InMemoryWebApiModule.forRoot(InMemoryEntryService),
            FormsModule],
  declarations: [AppComponent, EntryComponent, EntryListComponent, EntryCommentFormComponent],
  bootstrap: [AppComponent],
  providers: [ EntryService ],
})
export class AppModule {

}