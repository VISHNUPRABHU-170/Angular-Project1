import { Component } from '@angular/core';
import {EmpInfoService} from '.././emp-info.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  condition:boolean = false;
  Data:UserData[] = [];
  constructor(private service: EmpInfoService) {}

  ngOnInit(): void {
    this.Data = this.service.getData();
  }

  show() {
    console.log(this.Data);
    this.condition = true;
  }

  hide() {
    this.condition = false;
  }


}
