import {Routes} from '@angular/router';
import {AnotherPageComponent} from "./another-page/another-page.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'another-page', component: AnotherPageComponent},
];
