import { Injectable } from '@angular/core';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class EmpInfoService {
  private users: UserData[] = [];

  addData(user: UserData): void {
    this.users.push(user);
    console.log(this.users);
  }

  getData(): UserData[] {
    console.log(this.users);
    return this.users;
  }

  deleteUser(name: string) {
    this.users = this.users.filter(users => users.userName !== name);
    console.log(this.users);
  }

  updateUser(temp: UserData) {
    this.users = this.users.map(user => {
      if(user.userName === temp.userName){
        console.log(this.users);
        return {...temp};
      }
      return user;
    });
  }

}
