import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes =[
{ path: "navbar", component:NavbarComponent }, 
{ path: "about", component:AboutComponent },
{ path: "homepage", component:HomepageComponent },
{ path: "search", component:SearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
