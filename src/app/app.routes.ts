import { Routes } from '@angular/router';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { ColumnChartComponent } from './pages/column-chart/column-chart.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';

export const routes: Routes = [
    {
        path: 'line-chart',
        component: LineChartComponent
    }, 
    {
        path: 'column-chart',
        component: ColumnChartComponent
    },
    {
        path: 'pie-chart',
        component: PieChartComponent
    }
];
