import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'charts-demo';

  menuItems: any[] = [];
  ngOnInit() {
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    this.menuItems = [
      {
      name: 'Line charts',
      icon: 'show_chart',
      route: 'line-chart'
      },
      {
        name: 'Columns chart',
        icon: 'bar_chart',
        route: 'column-chart'
      },
      {
        name: 'Pie chart',
        icon: 'pie_chart',
        route: 'pie-chart'
      }
    ]
  }
}
