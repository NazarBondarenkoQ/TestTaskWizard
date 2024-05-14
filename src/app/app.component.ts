import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {BottomBarComponent} from "./bottom-bar/bottom-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentComponent, TopBarComponent, BottomBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestTaskWizard';
  items = [1, 2, 3];
}
