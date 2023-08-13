import { Component } from '@angular/core';
import { UserData } from '../user-data';
import { EmpInfoService } from '../emp-info.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent {
  gender: string = "Male";
  constructor(private service: EmpInfoService) {

  }

  update(form: any) {
    const user: UserData = {
      userName: form.controls['name'].value,
      userMail: form.controls['email'].value,
      userAge: form.controls['age'].value,
      userPhone: form.controls['phone'].value,
      userGender: this.gender,
    }
    this.service.updateUser(user);
  }
}
