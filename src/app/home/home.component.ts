import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faAdd, faCoffee, faHome, faSatellite} from "@fortawesome/free-solid-svg-icons";
import {faHackerNews} from "@fortawesome/free-brands-svg-icons";
import {faAngry} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected readonly faCoffee = faCoffee;
  protected readonly faHome = faHome;
  protected readonly faHackerNews = faHackerNews;
  protected readonly faSatellite = faSatellite;
  protected readonly faAdd = faAdd;
  protected readonly faAngry = faAngry;
}
