import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './layouts/login/login.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [
   //esta shit es para enrutar las pags
   //la primera abre el login con el url "localhost/4200"
   //la segunda abre el default, pero con relleno del dashboard
   //el default actua como "base" para todo el dashboard :v
   
  {path: '',component: LoginComponent},

  { path: 'default', component: DefaultComponent,
   children: [
     {path:'',component: DashboardComponent},
     {path: 'posts',component: PostsComponent}
    ]
  }
  

  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
