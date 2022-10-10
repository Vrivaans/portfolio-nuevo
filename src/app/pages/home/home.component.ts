import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/Services/user.service';
import { user } from 'src/app/Models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: user = new user("","","","");

  constructor(public userService: userService){}

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {this.user = data})
  }

}
