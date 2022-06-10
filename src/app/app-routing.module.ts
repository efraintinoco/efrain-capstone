import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
    path: "add-task",
    component: AddTaskComponent
  },{
  path: "videos",
  component: VideosComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
