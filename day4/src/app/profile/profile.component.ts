import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  // templateUrl: './profile.component.html',
  template: `
    Welcome {{username}}
<br><br>
    <button class="border p-1 rounded" (click)="red()">back to home</button>
  `,
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  username: string | null = "";
  constructor(private route: ActivatedRoute,private redirect:Router) { }


  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get("name");
  }
  red(){
    this.redirect.navigate(['home']);
  }



}
