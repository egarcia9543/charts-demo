import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'primeng/chart';
import { ButtonComponent } from '../../components/button/button.component';
import { chartjsColumnPieData, chartjsLineData, ngxColumnPieData, ngxLineData } from '../../utils/chartsData';
import { FilterFormComponent } from '../../components/filter-form/filter-form.component';

@Component({
  selector: 'app-column-chart',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    NgxChartsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    ChartModule,
    CommonModule,
    ButtonComponent,
    FilterFormComponent
  ],
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.css'
})
export class ColumnChartComponent {
  view: [number, number] = [800, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Empleados';
  showYAxisLabel = true;
  yAxisLabel = 'PQRs Gestionadas';
  isShowingNgx = true
  isChartGenerated = false;

  ngxData: any;
  chartjsData: any;

  sendForm(formValue: any) {
    this.chartjsData = chartjsColumnPieData('PQRs Gestionadas');
    this.ngxData = ngxColumnPieData();
    this.isChartGenerated = true;
  }

  clicked() {
    this.isShowingNgx = !this.isShowingNgx;
  }

  getMonths(startDate: any, endDate: any) {
    const months = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    let month = start.getMonth();
    let year = start.getFullYear();
    while (year < end.getFullYear() || month <= end.getMonth()) {
      months.push(`${month + 1}/${year}`);
      if (month === 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
    }
    return months;
  }
}

