import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['entry.component.css']
})

export class EntryComponent {
  title: string = 'My First Photo';
  photo: string = 'http://placehold.it/800x500?text=Angular Basics';
  description: string = 'Connect to CSS!';
  comments: any[] = [
    {name: 'John', comment: 'A Comment'},
    {name: 'Jacob', comment: 'A Comment'},
    {name: 'Jingle', comment: 'A Comment'},
  ];
}