import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { TaskReportListComponent } from './task-report-list/task-report-list.component';
import { FormsModule } from '@angular/forms';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListTasksComponent,
    AddTaskComponent,
    ListUsersComponent,
    TaskReportListComponent,
    ViewTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
