import { Component } from '@angular/core';
import { EmpInfoService } from '../emp-info.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent {
  name: string="";
  constructor(private service: EmpInfoService) {

  }

  delete(form: any) {
    this.name=form.controls['name'].value;
    console.log(this.name);
    this.service.deleteUser(this.name);
  }
}
