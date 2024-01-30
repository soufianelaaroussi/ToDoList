import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { UpdatetaskComponent } from './task/updatetask/updatetask.component';
import { TaskComponent } from './task/task.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'ToDoList' },
  { path: 'signin', component: SigninComponent, title: 'Sign-in' },
  { path: 'signup', component: SignupComponent, title: 'Sign-up' },
  {
    path: 'task',
    component: TaskComponent,
    title: 'Your Tasks List',
    children: [
      {
        path: 'addtask',
        title: 'Add A Task',
        component: AddtaskComponent,
      },
      {
        path: 'updatetask',
        title: 'Update Task',
        component: UpdatetaskComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
