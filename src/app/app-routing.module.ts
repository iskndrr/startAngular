import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"", redirectTo:"home" , pathMatch:"full"},
  {path:"home",component:HomeComponent , title:"Home"},
  {path:"portfolio",component:PortfolioComponent , title:"Portfolio"},
  {path:"about",component:AboutComponent , title:"About"},
  {path:"contact",component:ContactComponent , title:"Contact"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
