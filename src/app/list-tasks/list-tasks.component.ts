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
      estimation:2

    },
    {
      id: 2,
      name: "Install NodeJS",
      priority: "LOW",
      createdDate: "2021-07-01 09:00",
      createdBy: "Naresh",
      status: "COMPLETED",
      estimation:3
    },
    {
      id: 3,
      name: "Install VSCode",
      priority: "LOW",
      createdDate: "2021-07-01 09:00",
      createdBy: "Naresh",
      status: "COMPLETED",
      estimation:1
    },
  ];

  totalHours:number = 0;
  getTotalEstimationHours(){
    this.totalHours = 0;
    for(let task of this.tasks){
      this.totalHours = this.totalHours + task.estimation;
    }
    return this.totalHours;

  }


}
