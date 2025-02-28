import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {Menubar} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar, RouterLink, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'angular-test-tasks';
  public items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
      },
      {
        label: 'Tasks',
        icon: 'pi pi-th-large',
        items: [
          {
            label: 'Timezone',
            icon: 'pi pi-calendar',
            route: '/timezone'
          },
          {
            icon: 'pi pi-search',
            label: 'Search Form',
            route: '/search-form'
          }
        ]
      },
      {
        label: 'External',
        icon: 'pi pi-server',
        items: [
          {
            label: 'Angular',
            url: 'https://angular.io/'
          },
          {
            label: 'Vite.js',
            url: 'https://vitejs.dev/'
          }
        ]
      }
    ];
  }
}
