import { UserService } from './../user.service';
import { User } from './../user.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:User[]
  constructor(private userServices:UserService) {}

  ngOnInit(){
    this.user = this.userServices.getUsers()
  }

}
