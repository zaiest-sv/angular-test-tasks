import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Menubar} from "primeng/menubar";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'angular-test-tasks';
  public items: MenuItem[] | undefined;

  constructor() {}

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
            label: 'Timezone (Task 1)',
            icon: 'pi pi-calendar',
            route: '/timezone'
          },
          {
            icon: 'pi pi-search',
            label: 'Search Form (Task 2)',
            route: '/search-form'
          }
        ]
      },
    ];
  }
}
