import { Component } from '@angular/core';
import { BuiltInPipeExComponent } from "./built-in-pipe-ex/built-in-pipe-ex.component";
import { AppendPipe } from './append.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuiltInPipeExComponent,AppendPipe],
  // templateUrl: './app.component.html',
  template:`
  <app-built-in-pipe-ex></app-built-in-pipe-ex>

  <hr>
  <h1>Custom Pipe Ex</h1>
  The append Pipe by ak : {{val|append:"ak"}}
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
  val="Hello";
}
