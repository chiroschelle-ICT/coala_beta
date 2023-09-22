import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  constructor() {}

  ngOnInit() {}

  loginUser(item:any) {
    console.log(item.name)
  }



}
