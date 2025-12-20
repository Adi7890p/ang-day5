import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  // templateUrl: './home.component.html',
  template: `
  <p>home works!</p>

  <br><br>
  Users : (click to redirect with name value)
  <br>
  @for(user of users;track user.id){
    <br><u><a class="text-blue-500 " [routerLink]="['/profile',{name:user.name}]">s{{user.id}} - {{user.name}} - {{user.age}}</a></u>
    
   
    <br>

  }
  <br>
  <h4 class="font-bold">Redirect Programmatically onclick of button :</h4>
  <br>
  <input type="text" #unm placeholder="write other name to redirect with."> <br> <br>

  <button class="border " (click)="red(unm.value)">click to Redirect!</button>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users = [
    {
      id: 1,
      name: "Rahul",
      age: 23
    },
    {
      id: 2,
      name: "Rohit",
      age: 24
    },
    {
      id: 3,
      name: "Virat",
      age: 25
    },
    {
      id: 4,
      name: "Dhoni",
      age: 26
    },
    {
      id: 5,
      name: "Sachin",
      age: 27
    }
  ];

  constructor(private route:Router){}
  red(unm:string){
    this.route.navigate(['/profile',{name:unm}])
  }

}
