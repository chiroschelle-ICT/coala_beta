import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { delay } from 'rxjs';
import { users } from 'src/app/interfaces/users';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  allUsers: any[] = []
  user: any[] = []

  validForm:boolean = true
  responseMessage:string = ""

  loggedInUser: any[] = []

  username: string = ""
  email: string = ""
  password: string = ""

  bgColor!: string  
  bColor!: string
  
  loginValid = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe((data: any[]) => {
      this.allUsers = data;
    });

  }

  validateUser(item:any) {

    if(!item.name.trim()) {
      this.validForm = false
      this.responseMessage = "Vul Je naam In!"
    }
    else if(!item.email.trim()) {
      this.validForm = false
      this.responseMessage = "Vul Je email In!"
    }
    else if(!item.password.trim()) {
      this.validForm = false
      this.responseMessage = "Vul Je wachtwoord In!"
    }

    if(this.validForm) {

      for(let i=0; i<this.allUsers.length; i++) {
        if(this.username === this.allUsers[i].naam) {
          console.log("User exists")
          // Login the user 
          this.loginUser(item)

          break
        }else {
          console.log("User does not exist")
          this.bgColor = "#fca5a5"
          this.bColor = "3px solid red"
          this.responseMessage = "Foute Gegevens!"
          // exit
        }
      }
    

      this.dataService.getUserPerUsername(this.username).subscribe((data: any[]) => {
        this.user = data
      })
      
    }
    else {
      this.bgColor = "#fca5a5"
      this.bColor = "3px solid red"
    }

    
  }



  loginUser(item: any[]) {
    this.dataService.getUserPerUsername(this.username).subscribe((data: any[]) => {
      console.log(data)
      if(data[0].naam === this.username && data[0].email === this.email && data[0].password === this.password) {
        console.log("Correct")
        // User Logged in
        this.bgColor = "#9fff96"
        this.bColor = "3px solid green"
        this.responseMessage = "U Bent Ingelogd"
      }
      else {
        this.bgColor = "#fca5a5"
        this.bColor = "3px solid red"
        this.responseMessage = "Foute Gegevens!"
      }
    })
  }

}


