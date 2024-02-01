import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AnotherPageComponent} from "./another-page/another-page.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'another-page', component: AnotherPageComponent },
];
