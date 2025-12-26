import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe-ex',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,PercentPipe],
  // templateUrl: './built-in-pipe-ex.component.html',
  template:`
    <h1>Built In Pipe Example</h1>
    <h3>Default Text : {{title}}</h3>
    <h3>Lower Case Pipe : {{title|lowercase}}</h3>
    <h3>Upper Case Pipe : {{title|uppercase}}</h3>
    <h3>Title Case Pipe : {{title|titlecase}}</h3>
    <h3>Date :{{today | date}}</h3>
    <h3>Date (shortDate) :{{today | date:'shortDate'}}</h3>
    <h3>Date (shortTime) :{{today | date:'shortTime'}}</h3>
    <h3>Date (short) :{{today | date:'short'}}</h3>
    <h3>Date (medium) :{{today | date:'medium'}}</h3>
    <h3>Date (mediumDate) :{{today | date:'mediumDate'}}</h3>
    <h3>Date (mediumTime) :{{today | date:'mediumTime'}}</h3>
    <h3>Date (long) :{{today | date:'long'}}</h3>
    <h3>Date (longDate) :{{today | date:'longDate'}}</h3>
    <h3>Date (longdate in lower case) :{{today | date:'longDate' | lowercase}}</h3>
    <h3>Date (longTime) :{{today | date:'longTime'}}</h3>
    <h3>Date (full) :{{today | date:'full'}}</h3>
    <h3>Date (fullDate) :{{today | date:'fullDate'}}</h3>
    <h3>Date (fullTime) :{{today | date:'fullTime'}}</h3>
    <h3>Date (custom) :{{today | date:'dd/MM/yyyy'}}</h3>
    <br>
    <h3>original Number : {{num}}</h3>
    <h3>Percent : {{num | percent:'1.2-3'}}</h3>
    <h3>Currency : {{num | currency:'INR'}}</h3>
    <h3>Custom : {{num | currency:'INR':'symbol':'2.2-3'}}</h3>
   
    

  `,
  styleUrl: './built-in-pipe-ex.component.css'
})
export class BuiltInPipeExComponent {
  title="HEllo worLd";
  today=new Date();
  num=15.325574;

}
