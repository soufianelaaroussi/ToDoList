import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TaskComponent } from './task/task.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EdittaskComponent } from './edittask/edittask.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'ToDoList' },
  { path: 'signin', component: SigninComponent, title: 'Login' },
  { path: 'signup', component: SignupComponent, title: 'Register' },
  { path: 'task', component: TaskComponent, title: 'Profile',},
  { path: 'add', title: 'Add A Task', component: AddtaskComponent,},
  { path: 'edit', title: 'Edit My Task', component: EdittaskComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
