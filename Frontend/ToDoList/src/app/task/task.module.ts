import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';

@NgModule({
  declarations: [
    TaskComponent,
    AddtaskComponent,
    UpdatetaskComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class TaskModule {}
