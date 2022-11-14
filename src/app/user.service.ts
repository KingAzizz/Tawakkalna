import { Injectable } from '@angular/core';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User[] = [
    {
      id: "1200212221",
      name:"ahmed",
      image:"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=",
      DOB:"28/04/1992",
      city:"Riyadh",
      idCardImage:"../assets/idbg.png"
    }
  ]

  getUsers(){
    return [...this.user]
  }
  constructor() { }
}
