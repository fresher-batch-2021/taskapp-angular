import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users= [
    {id:1, name:"Naresh", email:"n@gmail.com", mobileNo:123, department:"Development"},
    {id:2, name:"Siva", email:"s@gmail.com", mobileNo:1234, department:"HR"}
  ]

}
