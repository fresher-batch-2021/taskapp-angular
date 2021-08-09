import { ViewTaskComponent } from './view-task/view-task.component';
import { TaskReportListComponent } from './task-report-list/task-report-list.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'add-task', component: AddTaskComponent},
  {path:'tasks', component:ListTasksComponent},
  {path:'viewtask/:id', component:ViewTaskComponent},
  {path:'users', component:ListUsersComponent},
  {path:'task-reports', component:TaskReportListComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
