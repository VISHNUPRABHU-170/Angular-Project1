import { Component } from '@angular/core';
import {EmpInfoService} from '../emp-info.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
})
export class AddEmpComponent {

  constructor(private service: EmpInfoService) {
  }
  add(form: any) {
    const user: UserData = {
      userName: form.controls['name'].value,
      userMail: form.controls['email'].value,
      userAge : form.controls['age'].value,
      userPhone: form.controls['phone'].value,
    };
    this.service.addData(user);
  }

  update() {

  }
}
