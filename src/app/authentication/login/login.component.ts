import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { users } from 'src/app/interfaces/users';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  users: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });  
  }
  loginUser(item:any) {
    console.log(item.name)
  }



}
