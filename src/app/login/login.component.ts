import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //let email = document.querySelector("#email").value
  email:string = "";
  password:string = "";

  login(){
    //alert("Login Button Clicked");
    //alert("Email" + this.email);
    //alert("Password:" + this.password);
    if(this.email == ""){
      alert("Email cannot be blank");
    }else if (this.password.length < 8){
      alert("Password must be greater than 8 characters");
    }
    else{
      alert("Successfully Registered");
      window.location.href="tasks";
    }
  }

}
