import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { UpdatetaskComponent } from './task/updatetask/updatetask.component';
import { MytaskslistComponent } from './task/mytaskslist/mytaskslist.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'task',
    component: TaskComponent,
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
      {
        path: 'taskslist',
        title: 'My Tasks List',
        component: MytaskslistComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
