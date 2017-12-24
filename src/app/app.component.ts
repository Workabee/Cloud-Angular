import {Component} from '@angular/core';
import {Hero} from "./module/Hero";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
