import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks = [
    {
      id: 1,
      name: "Install Chrome Browser",
      priority: "HIGH",
      createdDate: "2021-07-01 09:00",
      createdBy: "Naresh",
      status: "COMPLETED",
    },
    {
      id: 2,
      name: "Install NodeJS",
      priority: "LOW",
      createdDate: "2021-07-01 09:00",
      createdBy: "Naresh",
      status: "COMPLETED",
    },
    {
      id: 3,
      name: "Install VSCode",
      priority: "LOW",
      createdDate: "2021-07-01 09:00",
      createdBy: "Naresh",
      status: "COMPLETED",
    },
  ];


}
