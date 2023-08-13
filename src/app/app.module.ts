import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { HomeComponent } from './home/home.component';
import { EmpInfoService } from './emp-info.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    DeleteEmpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EmpInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
