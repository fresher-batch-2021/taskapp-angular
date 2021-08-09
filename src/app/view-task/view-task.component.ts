import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    //this.id = this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
  }

  task = {
    id: 1,
    name: "Install Chrome Browser",
    priority: "HIGH",
    createdDate: "2021-07-01 09:00",
    createdBy: "Naresh",
    status: "COMPLETED",
    estimation:2
  }

  deleteTask(){
    let cfm = confirm("Do you want to delete?");
    if(cfm){
      alert("Successfully Deleted");
      window.location.href="tasks";
    }
  }

}
