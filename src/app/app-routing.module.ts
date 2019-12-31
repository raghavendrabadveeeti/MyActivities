import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {TaskDefinitionComponent} from './task-definition/task-definition.component';
import {DailyTaskComponent} from './daily-task/daily-task.component';

const routes: Routes = [

  { path:'', component: DailyTaskComponent},
  { path:'taskDefinition', component: TaskDefinitionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
